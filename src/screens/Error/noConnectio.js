import React, {useState,Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';

import {scale, verticalScale} from 'react-native-size-matters';
import {FONT} from '../../utils/UIConstants';



export default class NoConnection extends Component {


render() {
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
        source={require('../../assets/lottieFiles/noInternet3.json')}
        resizeMode="contain"
        autoPlay
        loop
    />
    {/* <Text
    style={{
        textAlign: 'center',
        fontSize: scale(22),
        marginHorizontal: scale(12),
        textTransform: 'uppercase',
        fontWeight: '500',
        fontFamily: FONT,
        color:'black',
        padding:90,
        marginTop: verticalScale(290),
        }}>
        No Internet
      </Text> */}
        </View>
    );
  }
}

