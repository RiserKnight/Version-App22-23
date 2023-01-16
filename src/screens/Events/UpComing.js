/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {Image, ImageBackground, View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Events }from '../../utils/events';


const UpComing = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);

    const Item = ({ item, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={() => navigation.navigate('EventDescriptionScreen',{item})} style={[styles.items, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
            <View style= {styles.Dtime}>
                <Image style= {{height:30, width:30}} source={require("../../assets/icons/schedule.png")}/>
                <View style= {{marginLeft: 10}}>
                    <View style= {{flexDirection:'row'}}>
                        <Text style={[{fontSize:16, fontWeight:'bold', width:'90%'}, textColor]}>{item.StartDate}</Text>
                        <Text style={[{fontWeight:'900', fontSize:16, width:'5%'}, textColor]}>></Text>
                    </View>
                    <Text style= {textColor}>{item.StartTime}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item,navigation }) => {
        const backgroundColor =  "white";
        const color = 'black';

        return (
            <Item
                item={item}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
                
            />
        );
    };

    return (
            <View style= {styles.list}>
                
                <FlatList
                    data={Events}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsVerticalScrollIndicator={false}
                />
            </View>
     
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4d1637',
       // flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    items: {
        
        borderRadius: 10,
        padding:'3%',
        marginVertical:5,
        marginHorizontal: 5,
    },
    title: {
       
        fontSize: 20,
        fontWeight: 'bold',
    },
    Dtime:{
        
        flex:2,
        flexDirection:'row',
    },
    list:{
        padding:3,
        margin:'5%',
        marginTop:0,
        backgroundColor:'#4d1637',
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
    }
});
export default UpComing;
