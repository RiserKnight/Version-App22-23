import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Navigator from './navigation';
import * as eva from '@eva-design/eva';
import {LogBox} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {AuthProvider} from './context/AuthContext';
import SplashScreen from "react-native-splash-screen";
// import * as colors from './utils/colors';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  
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
};

export default App;
