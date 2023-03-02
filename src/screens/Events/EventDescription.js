import React, { useState,useEffect,useContext} from 'react';
import { View, Text, Image, SafeAreaView,StyleSheet, FlatList ,TouchableOpacity,Dimensions,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {events} from "../../mobx/eventsData";
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import Loader from '../loading/index';
import LottieView from 'lottie-react-native';
import {UserData} from '../../mobx/userData';
import { BASE_URL , KEY } from '../../utils/constants';
import {AuthContext} from '../../context/AuthContext';
import {observer} from 'mobx-react';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const EventDescriptionScreen = observer(({route}) => {
  const navigation = useNavigation();
  const {userToken}= useContext(AuthContext);
  const eve = events.state.regData;
  const[isLoading,setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [hasError, setHasError] = useState(false);
  const [data,setData] = useState([]);
  const [isRegistrationSuccess,setIsRegistrationSuccess] = useState(false);
const { item } = route.params;
const getEvent = () => {
  setHasError(false);
  setIsLoading(true);
  events.setRegData('');
  axios.post(`${BASE_URL}`+'/getUserRegisterData',{
      "app_key":KEY.APP_KEY,
      "user_token":userToken
  })
  .then(res => {
      setIsLoading(false);
      console.log("is loadingR="+isLoading);
      setIsLoading(false);
      let s="E"+`${item.eventID}`;
      if(s==="E101"){
        events.setRegData(res.data.data.E101);
      }
      else if(s==="E102"){
        events.setRegData(res.data.data.E102);
      }
      else if(s==="E103"){
        events.setRegData(res.data.data.E103);
      }
      else if(s==="E104"){
        events.setRegData(res.data.data.E104);
      }
      else if(s==="E105"){
        events.setRegData(res.data.data.E105);
      }
      else if(s==="E106"){
        events.setRegData(res.data.data.E106);
      }
      else if(s==="E107"){
        events.setRegData(res.data.data.E107);
      }
      else if(s==="E108"){
        events.setRegData(res.data.data.E108);
      }
      else if(s==="E109"){
        events.setRegData(res.data.data.E109);
      }
      else if(s==="E110"){
        events.setRegData(res.data.data.E110);
      }
      console.log("mob: "+eve);
      console.log("api call to hogaya bhai");
  }).catch(e=>{
      setIsLoading(false);
      console.log("is loadingR="+isLoading);
      console.log("aayaaaeerr");
      setHasError(true);
      setErrorText("Something went wrong");
      console.log(e);
  })
}
useEffect(() => {
  const unsubscribe = navigation.addListener('focus', () => {
      // The screen is focused
      // Call any action and update data
      getEvent();
  });
  
  console.log(eve);
  // Return the function to unsubscribe from the event so it gets removed on unmount
  return unsubscribe;
  // getEvent();
},[navigation]);

  const handlePress= () =>{
    setErrorText('');
    setIsLoading(true);
    setHasError(false);
    console.log(userToken);
    console.log("is loadingR="+isLoading);
    axios.post(`${BASE_URL}`+'/userEventReg/E'+`${item.eventID}`,{
        "app_key":KEY.APP_KEY,
        "user_token":userToken
      }).then(res => {
        console.log("is loadingR="+isLoading);
          setIsLoading(false);
          console.log(res.data);
          console.log("api call to hogaya bhai");
          if(res.data.success=="true"){
            console.log("hogya bhai register");
            console.log(res.data.msg);
            setIsRegistrationSuccess(true);
          }
          else{
            setHasError(true);
            if(res.data.code == "000"){
              setErrorText("Unauthorized");
              console.log("unauthorized");
            }
            else if(res.data.code == "200"){
              setErrorText("Invalid Token");
              console.log("Invalid Token");
            }
            else{
              setErrorText("Unexpected Error");
              console.log("Unexpected Error");
            }
          }
      }).catch(e=>{
        console.log("is loadingR="+isLoading);
        console.log("aayaaaeerr");
          setIsLoading(false);
          setHasError(true);
          setErrorText("Something went wrong");
          console.log(e);
      })
  }
  if (hasError) {
    return (
    <View
    style={{
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    }}>
    <LottieView
    style={{marginBottom: verticalScale(50)}}
    source={require('../../assets/lottieFiles/103574-robot-error.json')}
    resizeMode="contain"
    autoPlay
    loop
/>
    <Text
    allowFontScaling={false}
    style={{
        textAlign: 'center',
        fontSize: scale(20),
        marginHorizontal: scale(12),
        textTransform: 'uppercase',
        fontWeight: '600',
        color:'black',
        marginTop: verticalScale(200),
    }}>
    {errorText}
</Text>
<TouchableOpacity
    style={{
        padding: scale(9),
        paddingRight: scale(18),
        borderRadius: scale(24),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        position: 'absolute',
        backgroundColor: '#4d1637',
        bottom: verticalScale(50),
    }}
    onPress={() => {
        setHasError(false);
        navigation.goBack()}}>
    <View
        style={{
        flexDirection: 'row',
        borderRadius: scale(24),
        alignItems: 'center',
        }}>
    
        <View style={{width: scale(8)}} />
        <Text
        allowFontScaling={false}
        style={{
            fontSize: scale(17),
            color: 'white',

            fontWeight: 'bold',
        }}>
        TRY AGAIN
        </Text>
    </View>
    </TouchableOpacity>
    </View>
);
}
if (isRegistrationSuccess) {
  return (
    <View
    style={{
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white',
  }}>
     <LottieView
    style={{marginBottom: verticalScale(50)}}
    source={require('../../assets/lottieFiles/succ.json')}
    resizeMode="contain"
    autoPlay
    loop
/>
      <Text
    allowFontScaling={false}
    style={{
      textAlign: 'center',
      fontSize: scale(20),
      marginHorizontal: scale(12),
      textTransform: 'uppercase',
      fontWeight: '600',
      color:'black',
      marginTop: verticalScale(300),
    }}>
   Registration Successful

  </Text>
  <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.6, 0.8]}
        colors={['#4d1637', '#4d1637', '#4d1637']}
        style={{
          backgroundColor: 'blue',
          height: verticalScale(80),
          width: verticalScale(80),
          padding: scale(9),
          paddingRight: scale(18),
          borderRadius: scale(45),
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          backgroundColor: '#4d1637',
          bottom: verticalScale(50),
        }}>
        <TouchableOpacity onPress={()=> navigation.goBack()} >
        <Icon
            fill="white"
            style={{
              height: verticalScale(45),
              width: verticalScale(45),
              borderRadius: verticalScale(20),
            }}
            name="arrow-ios-forward-outline"
          />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
}
  return (
    <View style={styles.container}>
      <Loader isLoading={isLoading} />
      <ScrollView  showsVerticalScrollIndicator={false}>
       
        <Image style={styles.image}
        source={{uri:item.image}} />
        <Text style={styles.header}>
            {item.title}
        </Text>
        <Text style= {styles.text}>
          {item.desc}
        </Text>
      <View style={{flexDirection:'column',marginTop:40,paddingHorizontal: 15,marginBottom:80}}>
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
      {eve?(<View style={styles.bottom}>
        <TouchableOpacity style={styles.button1} onPress={handlePress} disabled={true} >
          <Text style={styles.buttonText1}>Registered</Text>
        </TouchableOpacity>
      </View>):
    (<View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handlePress} >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>)}
      </ScrollView>
</View>

  );
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '3%',
    backgroundColor: '#eee',
},
image: {
  width: windowWidth/2+80,
  height: windowHeight/4+30,
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
  position: 'relative',
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
button1: {
  width: '100%',
  height: 50,
  backgroundColor: 'green',
  alignItems: 'center',
  justifyContent: 'center',
},
buttonText1: {
  fontSize: 16,
  color: 'white',
},
});

export default EventDescriptionScreen;
