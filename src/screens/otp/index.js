import { useState } from "react";
import { StyleSheet, Text, View, Pressable, Keyboard,ScrollView,TouchableOpacity } from "react-native";
import OTPInput from "./components/OTPInput";
import { ButtonContainer, ButtonText } from "./components/styles";
import LottieView from 'lottie-react-native';
import otpLottie from '../../assets/lottieFiles/otp.json';
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
export default function Otp() {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <View style={{backgroundColor:'white'}}>
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

<View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>console.log(otpCode)}>
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