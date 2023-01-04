import React, {useEffect, useState} from 'react';
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
import Login from '../Login';
import Register from '../Register'

const Splash = ({navigation}) => {
    const [State, setState] = useState(0);
    const navigate = () => {
        console.log("moving");
        // if (URL_STATE === 2) {
        //   //fail - no internet connection
        //   setState(2);
        // } else if (URL_STATE === 3) {
        //   // all okay go ahead
        //   Login_Store.closeSplash();
        // }
        navigation.push('Login', {screenType: 'LOGIN'});
    };
    setTimeout(function () {
    navigate();
    }, 2000);
return (
    <>
    {State === 0 ? (
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
                source={require('../../assets/images/Xtenre.png')}></Image> 
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
                source={require('../../assets/images/version.png')}></Image> 
            </View>
            </View>
        </View>
    </>
    ) : (
    <>
        {/* {State === 1 ? (
        <>
            <Login />
        </>
        ) : (
        <>
            <Register />
        </>
        )} */}
       
    </>
    )}
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