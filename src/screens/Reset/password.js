import React, {useState,useContext} from 'react';
import {scale, verticalScale,moderateScale,} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {Black} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import {Icon} from '@ui-kitten/components';
import {Register} from '../Register';
import {AuthContext} from '../../context/AuthContext';
import {
  FONT,
  fontSizeBig,
  fontSizeVeryLarge,
  fontSizeMedium,
  paddingMedium,
  paddingSmall,
} from '../../utils/UIConstants';
import axios from 'axios';
import Loader from '../loading/index';
import LinearGradient from 'react-native-linear-gradient';
const ResetPassword = ({navigation}) => {
  const[password,setPassword]= useState('');
  const [isResetSuccess,setIsResetSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const[isLoading,setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  
  const _handelOnPress =  () => {
    // setPassword('');setPassword('');setName('');setPhone('');setCollege('');
    if(!password){
      alert("Please Enter Password");
      return;
    }
    setErrorText('');
    setIsLoading(true);
    setHasError(false);
    console.log("is loadingR="+isLoading);
    axios.post('https://reqres.in/api/register',{
          "email":password,
          "password":"clicks"
      }).then(res => {
        console.log("is loadingR="+isLoading);
          setIsLoading(false);
          console.log("aayaaa");
          console.log(res.data.id);
          setIsResetSuccess(true);
          // setErrorText("Something went wrong")
          // setUserToken('abc123');
          // AsyncStorage.setItem('userToken','abc123');
      }).catch(e=>{
        console.log("is loadingR="+isLoading);
        console.log("aayaaaeerr");
          setIsLoading(false);
          setHasError(true);
          console.log(e);
      })
  }
  console.log("is loading="+isLoading);
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
      Something Went Wrong !!! 
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
          navigation.navigate('Reset')}}>
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
  if (isResetSuccess) {
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
        marginBottom: verticalScale(10),
      }}>
    Password Reset Successful
    </Text>
    <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.6, 0.8]}
          colors={['#4d1637', '#852DCE', '#4d1637']}
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
          <TouchableOpacity onPress={()=> navigation.navigate('Login')} >
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
    <View style={{backgroundColor:'white'}}>
      <Loader isLoading={isLoading}/>
      <View
        style={{
          height: '100%',
          width: '100%',
          marginTop:verticalScale(10)
        }}>
        <Text style={styles.title}>Reset Password</Text>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637',borderRadius:scale(8)}}
            label="Password"
            placeholder="Enter your Password"
            mode="outlined"
            value={password}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            selectionColor='black'
            onChangeText={user => {
              setPassword(user);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        {errorText != '' ? (
            <Text style={styles.errorTextStyle}>
              {errorText}
            </Text>
          ) : null}
      
            <View style={{flexDirection:'row',justifyContent: 'space-around',}}>

          <TouchableOpacity
            style={{marginTop: 3}}
            onPress={() => {
              setErrorText('');
             _handelOnPress();
              }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: scale(12),
                fontFamily: FONT,
              }}>
              Reset
              <Text
                style={{
                  color: '#4d1637',
                  fontWeight: 'bold',
                  fontSize: scale(18),
                  fontFamily: FONT,
                  marginTop:20
                }}>
                {' '}
                PASSWORD
              </Text>
            </Text>
          </TouchableOpacity>
          </View>
          </View>
        </View>
  );
};

const styles = StyleSheet.create({
  // input1: {
  //   marginHorizontal: paddingMedium,
  //   marginTop: paddingSmall,
  //   borderWidth: scale(2),
  //   height: verticalScale(55),
  //   paddingHorizontal: scale(8),
  //   borderRadius: scale(8),
  //   fontFamily: FONT,
  //   borderColor:'#4d1637',
  //   color:'black'
  // },
  // inputStyle: {fontSize: scale(fontSizeMedium), color: 'black', fontFamily: FONT},
  // labelStyle: {fontSize: scale(fontSizeMedium)},
  // textErrorStyle: {fontSize: 16},
  errorTextStyle: {
    marginTop:20,
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  title: {
    marginTop: verticalScale(paddingSmall),
    paddingVertical: scale(paddingSmall),
    color: Black,
    paddingLeft: scale(paddingMedium),
    fontSize: scale(fontSizeBig),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
  textInput: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
  },
});

export default ResetPassword;
