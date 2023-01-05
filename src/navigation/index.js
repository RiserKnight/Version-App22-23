import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../screens/Splash';
import AppNavigator from './appNavigator'
import AuthNavigator from './authNavigator';
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {View,ActivityIndicator} from 'react-native';
const Stack = createNativeStackNavigator();
import {AUTH_NAV_STORE} from '../mobx/AUTH_NAV_STORE';
import {observer} from 'mobx-react';
const Navigator = observer(() => {
  const {isLoading,userToken}= useContext(AuthContext);
  if(isLoading){
    <View style={{flex:1,justifyContent: 'center',alignItems:'center'}}>
      <ActivityIndicator size="large"/>
    </View>
  }
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator  screenOptions={{
        headerShown: false
      }}>
        {AUTH_NAV_STORE.getSplashLoading ? (
          <>
            <Stack.Screen name="Splash" component={Splash} />
          </>
        ) :  userToken !== null ? (
          <>
          <Stack.Screen name="AppNavigator" component={AppNavigator} />
          </>
        ):(
          <>
            <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
});

export default Navigator;