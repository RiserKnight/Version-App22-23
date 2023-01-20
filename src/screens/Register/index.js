import React, {useState,useContext} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,ScrollView, ImageBackground,Image} from 'react-native';
import {TextInput} from 'react-native';
import {Black} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import loginLottie from '../../assets/lottieFiles/signup.json';
import {Icon} from '@ui-kitten/components';
import {Login} from '../Login';
import Loader from '../loading/index'
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import {
  FONT,
  fontSizeBig,
  fontSizeVeryLarge,
  paddingMedium,
  fontSizeMedium,
  paddingSmall,
} from '../../utils/UIConstants';
import LinearGradient from 'react-native-linear-gradient';
import { BASE_URL} from '../../utils/constants'
const Register = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const[phone,setPhone]= useState('');
    const[college,setCollege]= useState('');
    const[isLoading,setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [hasError, setHasError] = useState(false);
    const [isRegistrationSuccess,setIsRegistrationSuccess] = useState(false);
    const _handelOnPress =  () => {
      // setEmail('');setPassword('');setName('');setPhone('');setCollege('');
      if(!name){
        alert("Please Enter Name");
        return;
      }
      if(!email){
        alert("Please Enter Email");
        return;
      }
      if(!college){
        alert("Please Enter College");
        return;
      }
      if(!phone){
        alert("Please Enter Phone Number");
        return;
      }
      if(!password){
        alert("Please Enter Password");
        return;
      }
      setErrorText('');
      setIsLoading(true);
      setHasError(false);
      console.log("is loadingR="+isLoading);
      axios.post('https://reqres.in/api/register',{
            "email":email,
            "password":password
        }).then(res => {
          console.log("is loadingR="+isLoading);
            setIsLoading(false);
            console.log("aayaaa");
            console.log(res.data.id);
            setIsRegistrationSuccess(true);
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
    console.log("is loadingR="+isLoading);
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
            navigation.navigate('Register')}}>
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
      <Text
        allowFontScaling={false}
        style={{
          textAlign: 'center',
          fontSize: scale(16),
          marginHorizontal: scale(12),
          textTransform: 'uppercase',
          fontWeight: '600',
          color:'black',

        }}>
      User Id: 1234567
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
        <Loader isLoading={isLoading} />
        <ScrollView>
        <View
          style={{
            height: verticalScale(470),
            width: '100%',
            marginTop:verticalScale(10)
          }}>
          <Text style={styles.title}>Register</Text>
          <TextInput
            value={name}
            style={styles.input1}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            // textErrorStyle={styles.textErrorStyle}
            placeholder="Name"
            placeholderTextColor="gray"
            onChangeText={text => {
              setName(text);
            }}
            focusColor="black"
            // textError={email.length === 0 ? 'Please enter' : ''}
          />
          <TextInput
            value={email}
            style={styles.input1}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            // textErrorStyle={styles.textErrorStyle}
            placeholder="Email"
            placeholderTextColor="gray"
            onChangeText={text => {
              setEmail(text);
            }}
            focusColor="black"
            
            // textError={email.length === 0 ? 'Please enter' : ''}
          />
           <TextInput
            value={college}
            style={styles.input1}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            // textErrorStyle={styles.textErrorStyle}
            placeholder="College"
            placeholderTextColor="gray"
            onChangeText={text => {
              setCollege(text);
            }}
            focusColor="black"
            // textError={email.length === 0 ? 'Please enter' : ''}
          />
            <TextInput
            value={phone}
            style={styles.input1}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelStyle}
            // textErrorStyle={styles.textErrorStyle}
            placeholder="Phone"
            placeholderTextColor="gray"
            keyboardType="number-pad"
            onChangeText={text => {
              setPhone(text);
            }}
            focusColor="black"
            maxLength={10}
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
            onPress={() =>{
              setErrorText('');
              navigation.goBack()}}>
            <Text
              style={{
                color:'black',
                textAlign: 'center',
                fontSize: scale(12),
                fontFamily: FONT,
              }}>
              Already have an account?
              <Text
                style={{
                  color: '#4d1637',
                  fontWeight: 'bold',
                  fontSize: scale(14),
                  fontFamily: FONT,
                }}>
                {' '}
                LOG IN
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
            <TouchableOpacity onPress={_handelOnPress}
              >
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
          height: verticalScale(205),
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  input1: {
    marginHorizontal: paddingMedium,
    marginTop: paddingSmall,
    borderWidth: scale(2),
    height: verticalScale(50),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
    fontFamily: FONT,
    borderColor:'#4d1637',
    color:'black'
  },
  errorTextStyle: {
    marginTop:20,
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  inputStyle: {fontSize: scale(fontSizeMedium), color: 'black', fontFamily: FONT},
  labelStyle: {fontSize: scale(fontSizeMedium)},
  textErrorStyle: {fontSize: 16},
  title: {
    marginTop: verticalScale(paddingSmall-4),
    paddingVertical: scale(paddingSmall),
    color: Black,
    paddingLeft: scale(paddingMedium),
    fontSize: scale(fontSizeVeryLarge),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
});

export default Register;