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
        {image:"https://drive.google.com/uc?export=view&id=1-3iByXoZm8u_DUcibaN57LHgK8QKlDjT"},
        {image:"https://drive.google.com/uc?export=view&id=13TuDaulQGx_0pCmW_I3IYsB0acdnh8XH"},
        {image:"https://drive.google.com/uc?export=view&id=13hUDsSnv4xHbXl7EMdJb5SVV5sLCvPon"},
        {image:"https://drive.google.com/uc?export=view&id=1OKoV8oLf99_FOmXlEP5VhDRmY-E0USWp"}, // Network image
        {image:"https://drive.google.com/uc?export=view&id=1gMgVNaMzejgso_xX1pYAQvLHtE1mBqMG"}, // Network image
        {image:"https://drive.google.com/uc?export=view&id=1nAYv8FCY147lr2TB7zKGTVSdsrCT4PTn"}, // Network image
        {image:"https://drive.google.com/uc?export=view&id=1nAYv8FCY147lr2TB7zKGTVSdsrCT4PTn"}, // Network image
        {image:"https://drive.google.com/uc?export=view&id=1nAYv8FCY147lr2TB7zKGTVSdsrCT4PTn"}, // Network image
      ]
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <FlatListSlider
    data={images}
    width={275}
    timer={2000}
    component={<Preview />}
    indicatorActiveWidth={40}
    contentContainerStyle={{paddingHorizontal: 16}}
    indicatorContainerStyle={{position:'absolute', bottom: 20}}
    indicatorActiveColor={'#4d1637'}
    indicatorInActiveColor={'#4d1637'}
  />
      </View>
    );
  }