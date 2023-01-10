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
        {image:"https://source.unsplash.com/1024x768/?nature"},
        {image:"https://source.unsplash.com/1024x768/?water"},
        {image:"https://source.unsplash.com/1024x768/?girl"},
        {image:"https://source.unsplash.com/1024x768/?tree"}, // Network image
      ]
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <FlatListSlider
    data={images}
    width={275}
    timer={3000}
    component={<Preview />}
    indicatorActiveWidth={40}
    contentContainerStyle={{paddingHorizontal: 16}}
  />
      </View>
    );
  }