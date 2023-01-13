import React, {useState, useEffect} from 'react';
import {Text} from '@ui-kitten/components';
import {verticalScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FONT} from '../../utils/UIConstants';
import {scale} from 'react-native-size-matters';
import Hrc from './hrc';
import Eec from './eec';
import Ccc from './ccc';
import Arc from './arc';
import Ppc from './ppc';
import Prc from './prc';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Contacts = ({navigation}) => {

  return (
        <>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: scale(12),
                fontFamily: FONT,
              },
              tabBarIndicatorStyle: {backgroundColor: '#4d1637'},
              tabBarStyle: {backgroundColor: 'white'},
            }}
            >
            <Tab.Screen name="Eec" component={Eec} />
            <Tab.Screen name="Ccc" component={Ccc} />
            <Tab.Screen name="Hrc" component={Hrc} />
            <Tab.Screen name="Arc" component={Arc} />
            <Tab.Screen name="Ppc" component={Ppc} />
            <Tab.Screen name="Prc" component={Prc} />
          </Tab.Navigator>
        </>
  );
};

export default Contacts;