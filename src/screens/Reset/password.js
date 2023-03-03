import React, {useState,useContext} from 'react';
import {scale, verticalScale,moderateScale,} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,TouchableWithoutFeedback,Keyboard,} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {Black} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import {Icon} from '@ui-kitten/components';
import {Register} from '../Register';
import {BASE_URL,KEY} from '../../utils/constants';
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
  const[id,setId]= useState('');

  const [hasError, setHasError] = useState(false);
  const[isLoading,setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  
  const _handelOnPress =  () => {
    // setId('');setId('');setName('');setPhone('');setCollege('');
    if(!id){
      alert("Please Enter User Id");
      return;
    }
    // console.log(route.params.email);
    setErrorText('');
    setIsLoading(true);
    setHasError(false);
    console.log(id);
    console.log("is loadingR="+isLoading);
    axios.post(`${BASE_URL}`+'/forgot_pass',{
          "userID":id,
          "app_key":KEY.APP_KEY
      }).then(res => {
        console.log("is loadingR="+isLoading);
          setIsLoading(false);
          console.log("aayaaa");
          console.log(res.data);

          // navigation.navigate('SetPassword',{id:id});
          if(res.data.code==="100"){
            navigation.navigate('SetPassword',{id:id});
          }
          else{
            setHasError(true);
            if(res.data.code==="200"){
              setErrorText("User Does Not Exist");
            }
            else{
              setErrorText("Unexpected Error");
            }
          }
          // setErrorText("Something went wrong")
          // setUserToken('abc123');
          // AsyncStorage.setItem('userToken','abc123');
      }).catch(e=>{
        console.log("is loadingR="+isLoading);
        console.log("aayaaaeerr");
          setIsLoading(false);
          setHasError(true);
          setErrorText("Something went wrong");
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
          navigation.navigate('ResetPassword')}}>
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
  return(
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
            // maxLength={10}
            selectionColor='black'
            onChangeText={user => {
              setId(user);
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

export default ResetPassword;
