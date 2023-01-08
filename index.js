/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
// import PushNotification from "react-native-push-notification";
// PushNotification.configure({
//     onNotification: function (notification) {
//         console.log("NOTIFICATIONn:", notification);
//     },
//     requestPermissions: Platform.OS === 'ios'
// });
// AppRegistry.registerComponent(appName, () => App);
messaging().setBackgroundMessageHandler(async remoteMessage => {
    // storing the message with redux
  });
  
  function HeadlessCheck({isHeadless}) {
    return isHeadless ? null : <App />;
  }
  
  AppRegistry.registerComponent(appName, () => HeadlessCheck);
