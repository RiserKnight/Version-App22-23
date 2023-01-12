/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Day0 from './Day0';
import Day1 from './Day1';
import Day2 from './Day2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();


  
  const TabOneScreen= (navigation)=>{
    return(
      
    
        <Tab.Navigator style = {{fontWeight:'bold',fontSize:16}}
        screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {backgroundColor: '#4d1637'},
        tabBarLabelStyle: { fontSize: 12 },
        
      }}>
          <Tab.Screen name="25/02/2023" component={Day0}/>
          <Tab.Screen name="26/02/2023" component={Day1}/>
          <Tab.Screen name="27/02/2023" component={Day2}/>
        </Tab.Navigator>
      
    )
    }




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TabOneScreen;
