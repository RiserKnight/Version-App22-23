import React, {useState,useContext} from 'react';
import {scale, verticalScale,moderateScale,} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {Black} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import {Icon} from '@ui-kitten/components';
import {Register} from '../Register';
import {AuthContext} from '../../context/AuthContext';
import {BASE_URL,KEY} from '../../utils/constants';
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
const SetPassword = ({navigation,route}) => {
  const[password,setPassword]= useState('');
  const[cpassword,setCpassword]= useState('');
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
    if(!cpassword){
      alert("Please Re-Enter Password");
      return;
      }
      if(cpassword!=password){
        alert("Passwords must match");
        return;
      }
    console.log(route.params.id);
    navigation.navigate('Otp',{id:route.params.id,password:password});
  }
  console.log("is loading="+isLoading);

  return (
    <View >
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
        outlineStyle={{borderColor:'#4d1637', }}
            label="Password"
            placeholder="Enter your Password"
            mode="outlined"
            value={password}
            autoCapitalize="none"
            secureTextEntry={true}
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
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderColor:'#4d1637', }}
            label="Confirm Password"
            placeholder="Re-Enter your Password"
            mode="outlined"
            value={cpassword}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            secureTextEntry={true}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            selectionColor='black'
            onChangeText={user => {
              setCpassword(user);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        {/* {errorText != '' ? (
            <Text style={styles.errorTextStyle}>
              {errorText}
            </Text>
          ) : null} */}
      
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

export default SetPassword;
