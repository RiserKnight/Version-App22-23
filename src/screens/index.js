import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Platform,
  Image,
  Linking,
} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

const Splash = ({navigation}) => {
 setTimeout(function () {
 }, 2000);

  return (
    <> 
          <View style={styles.top}>
            
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  height: scale(200),
                  width: scale(200),
                  marginTop: verticalScale(-54),
                }}
                resizeMode="contain"
                source={require('../../assets/images/download.png')}></Image> 
            </View>
            <View style={styles.bottom}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: scale(50),
                    width: scale(100),
                  }}
                  resizeMode="contain"
                  source={require('../../assets/images/download.png')}></Image> //version logo
              </View>
            </View>
          </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  bottom: {
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: verticalScale(30), //
    width: '100%',
  },
  top: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#130e0b',
  },
});