import React from 'react';
import { View, Text } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor : 'cyan'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
