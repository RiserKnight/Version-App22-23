import React, {useState,useContext} from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
const Home = ({navigation}) => {
  const {logout,userToken}= useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor : 'cyan'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() =>  {
              console.log(userToken);
              logout();
              }}>
        <Text style={{color:'black',fontSize:40}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
