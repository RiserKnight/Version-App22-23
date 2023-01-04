import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Navigator from './navigation';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import SplashScreen from "react-native-splash-screen";
// import * as colors from './utils/colors';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <>
    <IconRegistry icons={[EvaIconsPack]} />
    <ApplicationProvider {...eva} theme={eva.light}>
            <NavigationContainer>
            <Navigator />
            </NavigationContainer>
          </ApplicationProvider>
    </>
  );
};

export default App;
