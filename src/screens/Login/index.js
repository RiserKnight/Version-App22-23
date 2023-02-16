import React, {useState,useContext} from 'react';
import {scale, verticalScale,moderateScale,} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
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
import Loader from '../loading/index';
import LinearGradient from 'react-native-linear-gradient';
const Login = ({navigation}) => {
  const[id,setId]= useState('');
  const [password, setPassword] = useState('');
  // const [eyeIcon, setEyeIcon] = useState('eye-off');
  // const [passwordToggle, setPasswordToggle] = useState(true);
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
    
    <View >
      <Loader isLoading={isLoading}/>
      <View
        style={{
          height: verticalScale(310),
          
          width: '100%',
          marginTop:verticalScale(10)
        }}>
        <Text style={styles.title}>LOGIN</Text>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            label="User Id"
            placeholder="Enter your User Id"
            mode="outlined"
            value={id}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            keyboardType="number-pad"
            selectionColor='black'
            onChangeText={user => {
              setId(user);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                        <TextInput
                        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
                          autoCorrect={false}
                          label="Password"
                          placeholder="Enter your password"
                          style={{backgroundColor: 'white',}}
                          mode="outlined"
                          autoComplete={'off'}
                          autoCapitalize="none"
                          secureTextEntry={true}
                          theme={{
                            colors: {
                              primary: 'black',
                            },
                          }}
                          selectionColor='black'
                          // right={
                          //   <TextInput.Icon
                          //     name={eyeIcon}
                          //     onPress={() => {
                          //       setPasswordToggle(!passwordToggle);
                          //       setEyeIcon(
                          //         eyeIcon === 'eye' ? 'eye-off' : 'eye',
                          //       );
                          //     }}
                          //   />
                          // }
                          value={password}
                          onChangeText={password => setPassword(password)}
                        />
                        </TouchableWithoutFeedback>
        </View>
        {/* {errorText != '' ? (
            <Text style={styles.errorTextStyle}>
              {errorText}
            </Text>
          ) : null} */}
        <View
          style={{
            height: verticalScale(30),
            flexDirection:'row',
            alignContent: 'center',
            justifyContent: 'space-around',
            marginTop: 10,
            marginBottom: 3,
          }}>
            <View style={{flexDirection:'column',justifyContent: 'center'}}>
          <TouchableOpacity
            style={{marginTop: 3}}
            onPress={() => {
              setErrorText('');
              setId('');
              setPassword('');
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
          <TouchableOpacity
            style={{marginTop: 3}}
            onPress={() => {
              setErrorText('');
              setId('');
              setPassword('');
              navigation.push('Reset', {screenType: 'RESET'})
              }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: scale(12),
                fontFamily: FONT,
              }}>
              Forgot USER ID / Password ?
              <Text
                style={{
                  color: '#4d1637',
                  fontWeight: 'bold',
                  fontSize: scale(14),
                  fontFamily: FONT,
                }}>
                {' '}
                RESET
              </Text>
            </Text>
          </TouchableOpacity>
          </View>
         
        </View>
        <View
          style={{
            alignItems: 'flex-end',
          }}>
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
    fontSize: scale(fontSizeVeryLarge),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
  textInput: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(10),
  },
});

export default Login;
