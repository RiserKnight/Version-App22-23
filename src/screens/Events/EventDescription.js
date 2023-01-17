import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView,StyleSheet, FlatList ,TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const EventDescriptionScreen = ({navigation,route}) => {
  const { item } = route.params;
  return (
    <View style={styles.container}>
    <SafeAreaView >
        <Image style={styles.image}
        source={{uri:item.image}} />
        <Text style={styles.header}>
            {item.title}
        </Text>
        <Text style= {styles.text}>
          {item.desc}
        </Text>
       <View style={{flexDirection:'column',marginTop:40,paddingHorizontal: 15,}}>
          <View style={styles.line}>
            <Text style= {styles.header20}>Event Starts</Text>
            <Text style={styles.header20}>Event Ends</Text>
          </View>
          <View style={styles.line}>
            <Text style= {styles.header21}>{item.StartDate}</Text>
            <Text style={styles.header21}>{item.EndDate}</Text>
          </View>
          <View style={styles.line}>
            <Text style= {styles.header21}>{item.StartTime}</Text>
            <Text style={styles.header21}>{item.EndTime}</Text>
          </View>
          
      </View>
      
    </SafeAreaView>
    <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
},
bottom: {
  flex: 1,
  justifyContent: 'flex-end',
},
button: {
  width: '100%',
  height: 50,
  backgroundColor: '#4d1637',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:30
},
buttonText: {
  fontSize: 16,
  color: 'white',
},
});

export default EventDescriptionScreen;
