import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Keyboard,ScrollView,TouchableOpacity } from "react-native";
import OTPInput from "./components/OTPInput";
import { ButtonContainer, ButtonText } from "./components/styles";
import LottieView from 'lottie-react-native';
import otpLottie from '../../assets/lottieFiles/otp.json';

import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';
import {
    FONT,
    fontSizeBig,
    fontSizeVeryLarge,
    fontSizeMedium,
    paddingMedium,
    paddingSmall,
  } from '../../utils/UIConstants';
  import {Black} from '../../utils/colors';
  import {scale, verticalScale,moderateScale,} from 'react-native-size-matters';
  import {BASE_URL,KEY} from '../../utils/constants';
  import Loader from '../loading/index.js';
export default function Otp ({navigation,route}) {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const [isResetSuccess,setIsResetSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const[isLoading,setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const maximumCodeLength = 4;
  const _handelOnPress =  () => {
    setErrorText('');
    setIsLoading(true);
    setHasError(false);
    // console.log(id);
    console.log("is loadingR="+isLoading);
    axios.post(`${BASE_URL}`+'/verifyOTP',{
      "userID":route.params.id,
      "OTP":otpCode,
      "pass":route.params.password,
      "app_key":KEY.APP_KEY
      }).then(res => {
        console.log("is loadingR="+isLoading);
          setIsLoading(false);
          console.log("aayaaa");
          console.log(res.data);
          if(res.data.success=="true"){
            console.log("hogya bhai reset");
            console.log(res.data.userID);
            setIsResetSuccess(true);
            // setUserId(res.data.userID);
          }
          else{
//             {"success": "false","msg":"Invalid Request","code": "200"}
// {"success": "false","msg": "Wrong OTP","code": "300"}
// {"success": "false","msg":"OTP Timeout","code": "250"}
// {"success": "false","msg": "Unexpected Error","code": "400"}
            setHasError(true);
            if(res.data.code == "000"){
              setErrorText("Unauthorized");
            }
            else if(res.data.code == "200"){
              setErrorText("Invalid Request");
            }
            else if(res.data.code == "300"){
              setErrorText("wrong Otp");
            }
            else if(res.data.code == "250"){
              setErrorText("OTP Time Out");
            }
            else{
              setErrorText("Unexpected Error");
            }
          }
      }).catch(e=>{
        console.log("is loadingR="+isLoading);
        console.log("aayaaaeerr");
          setIsLoading(false);
          setErrorText("Something went wrong");
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
          (errorText==="wrong Otp")?navigation.navigate('Otp',{id:route.params.id,password:route.params.password}):navigation.navigate('ResetPassword');
          }}>
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
    <View >
    <Loader isLoading={isLoading}/>
      <ScrollView>
    <View
    style={{
      height: '100%',
      width: '100%',
      marginTop:verticalScale(10)
    }}>
    <Text style={styles.title}>Enter OTP</Text>
    <Text style={styles.title2}>Please enter OTP sent to your Email ID</Text>
    {/* <Pressable style={styles.container} onPress={()=>{
     Keyboard.dismiss;
    console.log(otpCode);
    }}> */}
      <OTPInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />
      {/* <ButtonContainer
        disabled={!isPinReady}
        style={{
          backgroundColor: !isPinReady ? "grey" : "#4d1637",
        }}
      >
        <ButtonText
          style={{
            color: !isPinReady ? "black" : "#EEEEEE",
          }}
        >
        Submit
        </ButtonText> */}

<View style={styles.container} >
        <TouchableOpacity style={styles.button} onPress={()=>{
          _handelOnPress();
          console.log(otpCode)}}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      {/* </ButtonContainer> */}
      {/* </Pressable> */}
    
   
    <View
        style={{
          height: verticalScale(480),
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <LottieView
          source={otpLottie}
          progress={1}
          autoSize={false}
          resizeMode="contain"
          autoPlay
          loop
        />
      </View> 
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: verticalScale(paddingSmall),
    paddingVertical: scale(paddingSmall),
    color: Black,
    paddingLeft: scale(paddingMedium),
    fontSize: scale(fontSizeVeryLarge),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
  title2: {
    marginTop: verticalScale(paddingSmall),
    paddingVertical: scale(paddingSmall),
    color: Black,
    paddingLeft: scale(paddingMedium),
    fontSize: scale(fontSizeMedium),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#4d1637',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: "center",
     marginTop: verticalScale(paddingMedium),
    justifyContent: "center",
  },
});