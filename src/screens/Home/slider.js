import {
    View,
    Text,
    FlatList,
    
    TouchableOpacity,
    Animated,
  } from 'react-native';
  import Preview from './preview.js'
  import React, {useRef, useState} from 'react';
  import {FlatListSlider} from 'react-native-flatlist-slider';

  export default function Slider() {
    const
      images =[
        {image:"https://drive.google.com/uc?export=view&id=103-_Vlb_l1nczn4JixGxoG7AqN1b2zX-"},
        {image:"https://drive.google.com/uc?export=view&id=1ADg07Ii7CNhZHSWwNOsis7SnNYzHQ8pm"},
        {image:"https://drive.google.com/uc?export=view&id=1BiBGYVV_lzPnRTZTUZ-HPQ0Iap4ZBzUf"},
        {image:"https://drive.google.com/uc?export=view&id=1SAY6sF6HAm9vHxf0TExP5wgjgIEdP6S3"},
        {image:"https://drive.google.com/uc?export=view&id=1ZoJwzxn0wmueGdf4da2w8xxGxhYYuJDK"}, 
        {image:"https://drive.google.com/uc?export=view&id=1dx0ef41Hbg462kckfO9d8kgIl5MuY2cB"},
        {image:"https://drive.google.com/uc?export=view&id=1i0a55hHqZg3z69y10bRqJmOKQq7Uxscd"},
        {image:"https://drive.google.com/uc?export=view&id=1k3atrJCydT-x11nEjgXbJL8rymdXLvPo"},
        {image:"https://drive.google.com/uc?export=view&id=1swE9mKSCOTQXz31faM3gR9Pm47mAipPq"},
        {image:"https://drive.google.com/uc?export=view&id=1uXZx20fJd_9IV7OLue4qiU-ZxZZCcqQK"},
      ]
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <FlatListSlider
    data={images}
    width={300}
    timer={2000}
    component={<Preview />}
    indicatorActiveWidth={40}
    contentContainerStyle={{paddingHorizontal: 30}}
    indicatorContainerStyle={{position:'absolute', bottom: 20}}
    indicatorActiveColor={'#4d1637'}
    indicatorInActiveColor={'#4d1637'}
  />
      </View>
    );
  }