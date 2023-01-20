import React, {useState,Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';

import {scale, verticalScale} from 'react-native-size-matters';
import {FONT} from '../../utils/UIConstants';

export default  Wrong = ({navigation,fn}) =>{




return (
    <View
    style={{
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    }}>
    <LottieView
        style={{marginBottom: verticalScale(50)}}
        source={require('../../assets/lottieFiles/103574-robot-error.json')}
        resizeMode="contain"
        autoPlay
        loop
    />
     <Text
        allowFontScaling={false}
        style={{
          textAlign: 'center',
          fontSize: scale(20),
          marginHorizontal: scale(12),
          textTransform: 'uppercase',
          fontWeight: '600',
          color:'black',
          marginTop: verticalScale(200),
        }}>
        Something Went Wrong !!! 
      </Text>
     <TouchableOpacity
          style={{
            padding: scale(9),
            paddingRight: scale(18),
            borderRadius: scale(24),
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
            position: 'absolute',
            backgroundColor: '#4d1637',
            bottom: verticalScale(50),
          }}
          onPress={fn}
          >
          <View
            style={{
              flexDirection: 'row',
              borderRadius: scale(24),
              alignItems: 'center',
            }}>
        
              <View style={{width: scale(8)}} />
            <Text
              allowFontScaling={false}
              style={{
                fontSize: scale(17),
                color: 'white',

                fontWeight: 'bold',
              }}>
              TRY AGAIN
            </Text>
          </View>
        </TouchableOpacity>
        </View>
    );
  }


