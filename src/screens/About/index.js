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
                <Text style={styles.header}>
                    VERSION 2023
                </Text>
                <Text style= {styles.text}>
                The theme for Version 2023 is "XTenRe," that stands for Extended Reality- which encompasses a range of technologies that enhance or augment our perception of the real world, including virtual reality (VR), augmented reality (AR), and mixed reality (MR). Extended reality technologies have the potential to revolutionize the way we interact with the world around us. With VR, we can fully immerse ourselves in a digital environment and experience things that might not be possible in the real world. AR allows us to overlay digital information and objects onto the real world, creating a hybrid experience that blends the digital and the physical. MR combines elements of both VR and AR, creating a seamless blend of the real and the digital. The applications for extended reality technologies are vast and varied. They can be used for entertainment, such as video games and movies. They can also be used for education and training, allowing students and professionals to learn and practice skills in a safe, immersive environment. In addition, extended reality technologies have the potential to change the way we work, communicate, and even shop. This is an exciting opportunity to explore the world of extended reality and see how it is being used in innovative and creative ways.
                </Text>
                <View style = {styles.profile}>
                <Image style= {{height:200, width:175, alignSelf:'center'}} source= {{uri:"https://www.nitt.edu/home/academics/departments/ca/facultymca/sangeetha/sangeetha.JPG"}}/>
                <Text style={{fontSize:18, fontWeight:'bold', alignSelf:'center', color:'black'}}>Dr.(Mrs.) S.Sangeetha</Text>
                <Text style={{fontSize:14, fontWeight:'bold', alignSelf:'center', color:'gray'}}>Staff Advisor</Text>
                </View>


                <View style = {styles.socialicon}>
                    <TouchableOpacity onPress={() => {
                        Linking.openURL('http://www.version23.in');
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