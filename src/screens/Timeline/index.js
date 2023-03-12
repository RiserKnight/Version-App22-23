/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import Day1 from './Day1';
import { useNavigation } from '@react-navigation/native';

const TabOneScreen= ()=>{
    const navigation = useNavigation();
    return(
    <>
    <Day1/>
    </>
    )
    }




const styles = StyleSheet.create({
container: {
flex: 1,
},
});
export default TabOneScreen;
