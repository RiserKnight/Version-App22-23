import React, {useState,useContext} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native';
import {Black} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import loginLottie from '../../assets/lottieFiles/login.json';
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
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility';
import Loader from '../loading/index';
import LinearGradient from 'react-native-linear-gradient';
const Login = ({navigation}) => {
  const[id,setId]= useState('');
  const [password, setPassword] = useState('');
  const {login,isLoading,errorText,setErrorText,hasError,setError}= useContext(AuthContext);
  const _handelOnPress = () => {
    if(!id){
      alert("Please Enter User Id");
      return;
    }
    if(!password){
      alert("Please Enter Password");
      return;
    }
    console.log("login pressed");
    login(id,password);
    
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
          setError(false);
          navigation.navigate('Login')}}>
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
  return (
    <View style={{backgroundColor:'white'}}>
      <Loader isLoading={isLoading}/>
      <View
        style={{
          height: verticalScale(310),
          width: '100%',
          marginTop:verticalScale(10)
        }}>
        <Text style={styles.title}>LOGIN</Text>
        <TextInput
            value={id}
            style={styles.input1}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            // textErrorStyle={styles.textErrorStyle}
            placeholder="UserId"
            placeholderTextColor="gray"
            // keyboardType="number-pad"
            onChangeText={text => {
              setId(text);
            }}
            focusColor="black"
            //maxLength={10}
            // textError={email.length === 0 ? 'Please enter' : ''}
          />


        <TextInput
          value={password}
          style={styles.input1}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          // textErrorStyle={styles.textErrorStyle}
          placeholder="Password"
          placeholderTextColor="gray"
          onChangeText={text => {
            setPassword(text);
          }}
          secureTextEntry
          focusColor="black"
          autoCapitalize="none"
          // textError={email.length === 0 ? 'Please enter' : ''}
        />
        {errorText != '' ? (
            <Text style={styles.errorTextStyle}>
              {errorText}
            </Text>
          ) : null}
        <View
          style={{
            height: verticalScale(30),
            flexDirection:'row',
            alignContent: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginBottom: 3,
          }}>
          <TouchableOpacity
            style={{marginTop: 3}}
            onPress={() => {
              setErrorText('');
              navigation.push('Register', {screenType: 'REGISTER'})
              }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: scale(12),
                fontFamily: FONT,
              }}>
              Don't have an account?
              <Text
                style={{
                  color: '#4d1637',
                  fontWeight: 'bold',
                  fontSize: scale(14),
                  fontFamily: FONT,
                }}>
                {' '}
                REGISTER
              </Text>
            </Text>
          </TouchableOpacity>
          <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 0.6, 0.8]}
            colors={['#4d1637', '#852DCE', '#4d1637']}
            style={{
              backgroundColor: 'blue',
              height: verticalScale(40),
              width: verticalScale(40),
              borderRadius: verticalScale(20),
              marginRight: scale(paddingMedium),
            }}>
            <TouchableOpacity onPress={_handelOnPress}>
            <Icon
                fill="white"
                style={{
                  height: verticalScale(40),
                  width: verticalScale(40),
                  borderRadius: verticalScale(20),
                }}
                name="arrow-ios-forward-outline"
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      <View
        style={{
          height: verticalScale(390),
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          source={loginLottie}
          progress={1}
          autoSize={false}
          resizeMode="contain"
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
    marginHorizontal: paddingMedium,
    marginTop: paddingSmall,
    borderWidth: scale(2),
    height: verticalScale(55),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
    fontFamily: FONT,
    borderColor:'#4d1637',
    color:'black'
  },
  inputStyle: {fontSize: scale(fontSizeMedium), color: 'black', fontFamily: FONT},
  labelStyle: {fontSize: scale(fontSizeMedium)},
  textErrorStyle: {fontSize: 16},
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
    fontSize: scale(fontSizeVeryLarge),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
});

export default Login;
