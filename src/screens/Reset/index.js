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
const Reset = ({navigation}) => {
  const[email,setEmail]= useState('');
  const[roll,setRoll]= useState('');
  const[phone,setPhone]= useState('');
  const [isResetSuccess,setIsResetSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const[isLoading,setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [id,setId] = useState('');
  const _handelOnPress =  () => {
    // setEmail('');setPassword('');setName('');setPhone('');setCollege('');
    if(!roll){
      alert("Please Enter Roll Number");
      return;
    }
    if(!phone){
      alert("Please Enter Mobile Number");
      return;
    }
    if(!email){
      alert("Please Enter Email");
      return;
    }
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(email)==false){
      alert("Invalid Email");
      return;
    }
    setErrorText('');
    setIsLoading(true);
    setHasError(false);
    console.log("is loadingR="+isLoading);
    axios.post(`${BASE_URL}`+'/forgot_regno',{
          "roll":roll,
          "email":email,
          "contact":phone,
          "app_key":KEY.APP_KEY
      }).then(res => {
        console.log("is loadingR="+isLoading);
          setIsLoading(false);
          console.log("aayaaa");
          console.log(res.data);
          if(res.data.success=="true"){
            setIsResetSuccess(true);
            setId(res.data.userID);
          }
          else{
            setHasError(true);
            if(res.data.code=="200"){
              setErrorText("Invalid Information");
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
        setErrorText("Something went wrong");
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
      }}>
    Search Successful
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
    User Id: {id}
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
      <View
        style={{
          height: '100%',
          width: '100%',
          marginTop:verticalScale(10)
        }}>
        <Text style={styles.title}>Retrieve User ID </Text>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            label="Roll"
            placeholder="Enter your Roll Number"
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
            onChangeText={user => {
              setRoll(user);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textInput}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <TextInput
        outlineStyle={{borderWidth: scale(2),borderColor:'#4d1637', }}
            label="Phone"
            placeholder="Enter your Mobile Number"
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
            onChangeText={user => {
              setPhone(user);
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
            onChangeText={user => {
              setEmail(user);
            }}
          />
          </TouchableWithoutFeedback>
        </View>
        {/* {errorText != '' ? (
            <Text style={styles.errorTextStyle}>
              {errorText}
            </Text>
          ) : null} */}
      
            <View style={{flexDirection:'column',justifyContent: 'space-around',}}>
            <TouchableOpacity
            style={{marginTop: 3}}
            onPress={() => {
              setErrorText('');
              // navigation.push('ResetPassword', {screenType: 'RESET'})4
              navigation.navigate('ResetPassword')
              }}>
            <Text
              style={{
                color: 'black',
                textAlign: 'right',
                fontSize: scale(12),
                fontFamily: FONT,
                paddingRight:scale(13)
              }}>
              Forgot
              <Text
                style={{
                  color: '#4d1637',
                  fontWeight: 'bold',
                  fontSize: scale(18),
                  fontFamily: FONT,
                  marginTop:20
                }}>
                {' '}
                PASSWORD ?
              </Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 3}}
            onPress={() => {
              setErrorText('');
              _handelOnPress()
              }}>
            {/* <Text
              style={{
                color: 'black',
                textAlign: 'center',
                fontSize: scale(12),
                fontFamily: FONT,
              }}>
              Retrieve */}
              <Text
                style={{
                  color: '#4d1637',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: scale(18),
                  fontFamily: FONT,
                  marginTop:20
                }}>
                {' '}
                SUBMIT
              </Text>
            {/* </Text> */}
          </TouchableOpacity>
          {/* <Text
                style={{
                  color: '#4d1637',
                  fontWeight: 'bold',
                  fontSize: scale(18),
                  fontFamily: FONT,
                  marginTop:20,
                  justifyContent:'center',
                  textAlign: 'center',
                }}>
                {' '}
                OR
              </Text> */}

          
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

export default Reset;
