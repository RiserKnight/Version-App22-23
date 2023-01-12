/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {Image, ImageBackground, View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
    {
        id: "1",
        title: "Coding Cauldron",
        date: "17/02/2013",
        StartTime: "09:00 AM",
    
    },
    {
        id: "2",
        title: "Eliminator Round 1",
        date: "17/02/2013",
        StartTime: "11:30 AM",

    },
    {
        id: "3",
        title: "Lunch Break",
        date: "17/02/2013",
        StartTime: "01:00 PM",
        
    },
    {
        id: "4",
        title: "Xscape Quest",
        date: "17/02/2013",
        StartTime: "02:00 PM",
    },
    {
        id: "5",
        title: "Eliminator Round 2",
        date: "17/02/2013",
        StartTime: "05:30 PM",
    
    },
    {
        id: "6",
        title: "Closing Ceremony",
        date: "17/02/2013",
        StartTime: "07:00 PM",
    },
    {
        id: "7",
        title: "Closing Ceremony",
        date: "17/02/2013",
        StartTime: "07:00 PM",
    },
    {
        id: "8",
        title: "Closing Ceremony",
        date: "17/02/2013",
        StartTime: "07:00 PM",
    },
    {
        id: "9",
        title: "Closing Ceremony",
        date: "17/02/2013",
        StartTime: "07:00 PM",
    },
    {
        id: "10",
        title: "Closing Ceremony",
        date: "17/02/2013",
        StartTime: "07:00 PM",
    },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.items, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
        <View style= {styles.Dtime}>
            <Image style= {{height:30, width:30}} source={require("../../assets/icons/schedule.png")}/>
            <View style= {{marginLeft: 10}}>
                <View style= {{flexDirection:'row'}}>
                    <Text style={[{fontSize:16, fontWeight:'bold', width:'90%'}, textColor]}>{item.date}</Text>
                    <Text style={[{fontWeight:'900', fontSize:16, width:'5%'}, textColor]}>></Text>
                </View>
                <Text style= {textColor}>{item.StartTime}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const UpComing = (navigation) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
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
                    data={DATA}
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
