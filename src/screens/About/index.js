/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Linking} from 'react-native'
const About = () => {
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={{uri:"https://www.nitt.edu/home/academics/departments/ca/events/version/version.JPG"}} />
                <Text style={styles.header}>
                    VERSION
                </Text>
                <Text style= {styles.text}>
                    Version is an annual all India MCA meet conducted by the students of MCA at NIT, Trichy. Since it's conception in 1991, Version has aimed to bring the best students from MCA all over India to NIT, compete against each other and showcase their talent and potential. Version includes a variety of events which aims to challenge students to think out of the box and be creative.
                     Version is the star event for MCA at NIT, Trichy and has become one of the most anticipated events for MCA students all over India.
                </Text>
                <View style = {styles.profile}>
                <Image style= {{height:200, width:175, alignSelf:'center'}} source= {{uri:"https://www.nitt.edu/home/academics/departments/ca/facultymca/sangeetha/sangeetha.JPG"}}/>
                <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center', color:'black'}}>Dr.(Mrs.) S.Sangeetha</Text>
                <Text style={{fontSize:14, fontWeight:'bold', alignSelf:'center', color:'gray'}}>Staff Advisor</Text>
                </View>
                <View style = {styles.socialicon}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.nitt.edu/home/academics/departments/ca/events/version/');
                        }}>
                        <Image style= {{height:50, width:50, alignSelf:'center'}} source= {require('../../assets/icons/web.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.instagram.com/version_nit_trichy/');
                        }}>
                        <Image style= {{height:50, width:50, alignSelf:'center'}} source= {require('../../assets/icons/instagram.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.youtube.com/@VersionNITTrichy');
                        }}>
                        <Image style= {{height:50, width:50, alignSelf:'center'}} source= {require('../../assets/icons/youtube.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('https://www.facebook.com/versionmeet/');
                        }}>
                    <Image style= {{height:50, width:50, alignSelf:'center'}} source= {require('../../assets/icons/facebook.png')}/>
                    </TouchableOpacity>
                </View>
                
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '3%',
        backgroundColor: '#eee',
    },
    image: {
        width: 300,
        height: 150,
        position: 'relative',
        alignSelf: 'center',
        borderRadius: 10,
    },
    header: {
        marginTop:20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color:'black',
    },
    text:{
        color:'black',
        fontSize:16,
        fontFamily:'',
        marginTop: 10,
    },
    profile:{
        width:200,
        height:250,
        alignSelf:'center',
        margin:20,
    },
    socialicon:{
        flexDirection:'row',
        justifyContent:'space-around',
    }
})
export default About;