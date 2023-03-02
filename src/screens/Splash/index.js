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
import NoConnection from '../Error/noConnectio'
import PushNotification from "react-native-push-notification";
import {scale, verticalScale} from 'react-native-size-matters';
import AuthNavigator from '../../navigation/authNavigator'
import {AUTH_NAV_STORE} from '../../mobx/AUTH_NAV_STORE';
import NetInfo from '@react-native-community/netinfo';
import { AsyncStorage } from 'react-native';
import {UserData} from '../../mobx/userData';
import * as KEYS from '../../utils/Storage_keys';
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
        NetInfo.fetch().then((state) => {
            if(state.isConnected == true ){
                AUTH_NAV_STORE.setSplashLoading(false);
            }
            else{
                setState(2);
            }
        });
    };
    // UserData.setName(res.data.data.name);
    // UserData.setCollege(res.data.data.university);
    // UserData.setUserId(res.data.data.userID);
    // console.log(UserData.userName);
    // UserData.setPhone(response.data.isAdmin);
    // UserData.setToken(res.data.token); //
    const setupMobx = () => {
        console.log('Setting up');
        AsyncStorage.getItem(KEYS.USER_TOKEN).then(val => {
        if (val) UserData.setToken(val);
        else UserData.setToken(null);
        });
        AsyncStorage.getItem(KEYS.USER_NAME).then(val => {
        if (val) UserData.setName(val);
        else UserData.setName(null);
        });
        AsyncStorage.getItem(KEYS.USER_ID).then(val => {
        if (val) UserData.setUserId(val);
        else UserData.setUserId(null);
        });
        AsyncStorage.getItem(KEYS.USER_COLLEGE).then(val => {
        if (val) UserData.setCollege(val);
        else UserData.setCollege(null);
        });
    };
    useEffect(() => {
        setupMobx();
    }, []);
    setTimeout(function () {
    navigate();
    }, 2000);
    useEffect(() => {
        createChannels();
    }, []);
    const createChannels = () => {
        PushNotification.createChannel(
            {
                channelId: "test-channel",
                channelName: "Test Channel"
            }
        )
    }

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
        {State === 2 ? (
        <>
            < NoConnection/>
        </>
        ) : (
        <>
            {/* <Register /> */}
        </>
        )}
    </>
    )}
</>
);
};




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
export default Splash;