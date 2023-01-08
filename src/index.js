import React, {Component,useEffect} from 'react';
import {SafeAreaView, View ,Alert} from 'react-native';
import Navigator from './navigation';
import * as eva from '@eva-design/eva';
import {LogBox} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AuthProvider} from './context/AuthContext';
import SplashScreen from "react-native-splash-screen";
import Notification from './screens/notification'
import * as RootNavigation from './navigation/RooNavigation';
import PushNotification from "react-native-push-notification";
// import * as colors from './utils/colors';
import messaging from '@react-native-firebase/messaging'
import { NavigationContainer } from '@react-navigation/native';
    export default function App() {
      useEffect(() => {
        (async () => await messaging().registerDeviceForRemoteMessages())();
    
        const unsubscribe = messaging().onMessage(async remoteMessage => {
          store.dispatch(storeNews(remoteMessage));
        });
    
        messaging().onNotificationOpenedApp(remoteMessage => {
          //Alert.alert('here');
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.data.message,
          );
          RootNavigation.navigate('Notification', {
                    itemId: 86,
                    otherParam: remoteMessage,
                        });

        });
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            console.log(remoteMessage); // always prints null
            if (remoteMessage) {
              // Never reached
             // Alert.alert('here');
              
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage,
              );
              setTimeout(function () {
                // Alert.alert(
                //   "Alert Title",
                //   "My Alert Msg",
                //   [
                //     {
                //       text: "Cancel",
                //       onPress: () =>{  RootNavigation.navigate('Notification', {
                //         itemId: 86,
                //         otherParam: remoteMessage,
                //             });} ,
                //       style: "cancel",
                //     },
                //   ],
                //   {
                //     cancelable: true,
                //   }
                // );
                RootNavigation.navigate('Notification', {
                  itemId: 86,
                  otherParam: remoteMessage,
                      });
                }, 2500);
              
            }
          });
        return unsubscribe;
      }, []);
    
  return (
    <>
      <AuthProvider>
          <IconRegistry icons={[EvaIconsPack]} />
          <ApplicationProvider {...eva} theme={eva.light}>
                  <NavigationContainer>
                    <Navigator />
                  </NavigationContainer>
          </ApplicationProvider>
      </AuthProvider>
    </>
  );
}


//export default App;
