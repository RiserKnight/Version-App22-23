import React, {useState,useContext} from 'react';
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,ScrollView, ImageBackground,Image,TouchableWithoutFeedback,Keyboard,Dimensions} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
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
import { BASE_URL , KEY } from '../../utils/constants'
const Register = ({navigation}) => {
  const [userId,setUserId]=useState('');
    // const [eyeIcon, setEyeIcon] = useState('eye-off');
    // const [passwordToggle, setPasswordToggle] = useState(true);
    const [email, setEmail] = useState('');
    const [roll,setRoll]=useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
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
      if(!roll){
        alert("Please Enter Roll number");
        return;
      }
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(email)==false){
        alert("Invalid Email");
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
      if(phone.length<10){
        alert("Please Enter A Valid Phone Number");
        return;
      }
      if(!password){
        alert("Please Enter Password");
        return;
      }
      if(!cpassword){
        alert("Please Enter Confirm Password");
        return;
      }
      if(cpassword!=password){
        alert("Passwords Did Not Match");
        return;
      }
      setErrorText('');
      setIsLoading(true);
      setHasError(false);
      console.log("is loadingR="+isLoading);
      axios.post(`${BASE_URL}`+'/register',{
          "userName":name,
          "roll":roll,
          "email":email,
          "university":college,
          "pass":password,
          "contact":phone,
          "app_key":KEY.APP_KEY
        }).then(res => {
          console.log("is loadingR="+isLoading);
            setIsLoading(false);
            console.log(res.data);
            console.log("api call to hogaya bhai");
            if(res.data.success=="true"){
              console.log("hogya bhai register");
              console.log(res.data.userID);
              setIsRegistrationSuccess(true);
              setUserId(res.data.userID);
            }
            else{
              setHasError(true);
              if(res.data.code == "000"){
                setErrorText("Unauthorized");
              }
              else if(res.data.code == "200"){
                setErrorText("User Email Already Exists");
              }
              else if(res.data.code == "300"){
                setErrorText("Validation Error");
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
          fontSize: scale(12),
          marginHorizontal: scale(12),
          textTransform: 'uppercase',
          fontWeight: '600',
          color:'black',

        }}>
      Please check your email and verify your account. Also check spam folder.
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
        <Loader isLoading={isLoading} />
        <ScrollView>
        <View
          style={{
            height:Dimensions.get('window').height,
            // height: verticalScale(800),
            width: '100%',
            marginTop:verticalScale(10),
              // backgroundColor:'red'
          }}>
          <Text style={styles.title}>Register</Text>
          <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            label="Name"
            placeholder="Enter your Name"
            mode="outlined"
            value={name}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            selectionColor='black'
            onChangeText={text => {
              setName(text);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
         <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            label="Roll"
            placeholder="Enter your Roll number"
            mode="outlined"
            value={roll}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            selectionColor='black'
            onChangeText={text => {
              setRoll(text);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
            outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            label="Email"
            placeholder="Enter your Email"
            mode="outlined"
            value={email}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            selectionColor='black'
            onChangeText={text => {
              setEmail(text);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
            label="College"
            placeholder="Enter your College"
            outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            mode="outlined"
            value={college}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            selectionColor='black'
            onChangeText={text => {
              setCollege(text);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
            label="Mobile"
            placeholder="Enter your Mobile number"
            outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            mode="outlined"
            value={phone}
            autoCapitalize="none"
            style={{backgroundColor: 'white'}}
            theme={{
              colors: {
                primary: 'black',
              },
            }}
            keyboardType="number-pad"
            maxLength={10}
            selectionColor='black'
            onChangeText={text => {
              setPhone(text);
            }}
          />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            autoCorrect={false}
            label="Password"
            outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
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
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            autoCorrect={false}
            label="Confirm Password"
            outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            placeholder="Re-Enter your password"
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
            value={cpassword}
            onChangeText={cpassword => setCpassword(cpassword)}
          />
          </TouchableWithoutFeedback>
        </View>
         {/* {errorText != '' ? (
            <Text style={styles.errorTextStyle}>
              {errorText}
            </Text>
          ) : null} */}
        <View style={{flexDirection:'row',justifyContent: 'space-around',}}>
        <View
          style={{
            height: verticalScale(30),
            // flexDirection:'row',
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
        </View>
        <View
          // style={{
          //   alignItems: 'flex-end',
          // }}
          >
        <LinearGradient
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            locations={[0, 0.6, 0.8]}
            colors={['#4d1637', '#4d1637', '#4d1637']}
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
      </View>
      {/* <View
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
      </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  // input1: {
  //   marginHorizontal: paddingMedium,
  //   marginTop: paddingSmall,
  //   borderWidth: scale(2),
  //   height: verticalScale(50),
  //   paddingHorizontal: scale(8),
  //   borderRadius: scale(8),
  //   fontFamily: FONT,
  //   borderColor:'#4d1637',
  //   color:'black'
  // },
  errorTextStyle: {
    marginTop:20,
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  // inputStyle: {fontSize: scale(fontSizeMedium), color: 'black', fontFamily: FONT},
  // labelStyle: {fontSize: scale(fontSizeMedium)},
  // textErrorStyle: {fontSize: 16},
  title: {
    marginTop: verticalScale(paddingSmall-4),
    paddingVertical: scale(paddingSmall),
    color: Black,
    paddingLeft: scale(paddingMedium),
    fontSize: scale(fontSizeVeryLarge),
    fontWeight: 'bold',
    fontFamily: FONT,
  },
  textInput: {
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(5),
  },
});

export default Register;