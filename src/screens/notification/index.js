import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView,StyleSheet, FlatList ,Dimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const Notification = ({ route, navigation }) => {
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}
        source={{uri:otherParam.data.url}} />
        <Text style= {styles.header}>
          {otherParam.data.header}
        </Text>
        <Text style= {styles.text}>
          {otherParam.data.message}
        </Text>
        <Text style= {styles.text1}>
          {otherParam.data.contact}
        </Text>
        <Text style= {styles.text1}>
          {otherParam.data.venue}
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
    width: windowWidth/2+100,
    height: windowHeight/4+50,
    position: 'relative',
    alignSelf: 'center',
    
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
    marginTop: 30,
    paddingLeft:10,
    alignSelf: 'center',
},
text1:{
  color:'black',
  fontSize:18,
  fontFamily:'',
  fontWeight:'bold',
  marginTop: 30,
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
