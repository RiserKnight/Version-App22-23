/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import UpComing from './UpComing';
import Completed from './Completed';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();

    const Events= ({navigation})=>{
      return(
        
      
          <Tab.Navigator>
            <Tab.Screen name="UPCOMING" component={UpComing}/>
            <Tab.Screen name="COMPLETED" component={Completed}/>
          </Tab.Navigator>
        
      )}

export default Events;
