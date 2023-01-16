import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView,StyleSheet, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const Notification = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}
        source={{uri:otherParam.data.url}} />
        
        <Text style= {styles.text}>
          {otherParam.data.message}
        </Text>
     
    </SafeAreaView>
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    margin: '3%',
    backgroundColor: '#eee',
},
image: {
    width: 300,
    height: 150,
    position: 'relative',
    alignSelf: 'center',
    borderRadius: 10,
},
header: {
    marginTop:20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
},
header20: {

  textAlign: 'center',
  fontSize: 16,
  //fontWeight: 'bold',
  color:'gray',
  marginBottom: 20,
},
header21: {

  textAlign: 'center',
  fontSize: 15,
  //fontWeight: 'bold',
  color:'black',
},
text:{
    color:'black',
    fontSize:16,
    fontFamily:'',
    marginTop: 10,
    paddingLeft:10,
    alignSelf: 'center',
},
timings:{
  flexDirection:'row',
  justifyContent:'space-around',
},
line:{
  flexDirection:'row',
  justifyContent:'space-between',
}
});

export default Notification;
