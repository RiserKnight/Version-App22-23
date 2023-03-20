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
        {otherParam.data.url!=null?<Image style={styles.image}
        source={{uri:otherParam.data.url}} />:null}
        <Text style= {styles.header}>
          {otherParam.data.header}
        </Text>
        <Text style= {styles.text}>
          {otherParam.data.message1}
        </Text>
        {otherParam.data.message2!=null?<Text style= {styles.text}>
          {otherParam.data.message2}
        </Text>:null}
        {otherParam.data.message3!=null?<Text style= {styles.text}>
          {otherParam.data.message3}
        </Text>:null}
        {otherParam.data.message4!=null?<Text style= {styles.text}>
          {otherParam.data.message4}
        </Text>:null}
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
    width: windowWidth/2+175,
    height: windowHeight/4+185,
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
