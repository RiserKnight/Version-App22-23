import React, {useState,useContext} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
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
  paddingMedium,
  paddingSmall,
} from '../../utils/UIConstants';
import LinearGradient from 'react-native-linear-gradient';

const Login = ({navigation}) => {
  const [roll, setRoll] = useState('');
  const[phone,setPhone]= useState('');
  const [password, setPassword] = useState('');
  const {login,userToken}= useContext(AuthContext);
  
  
  return (
    <View style={{backgroundColor:'white'}}>
      <View
        style={{
          height: verticalScale(310),
          width: '100%',
          marginTop:verticalScale(10)
        }}>
        <Text style={styles.title}>LOGIN</Text>
       
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
          value={roll}
          style={styles.input1}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          // textErrorStyle={styles.textErrorStyle}
          placeholder="Roll Number"
          placeholderTextColor="gray"
          onChangeText={text => {
            setRoll(text);
          }}
          keyboardType="number-pad"
          focusColor="black"
          autoCapitalize="none"
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
            onPress={() => navigation.push('Register', {screenType: 'REGISTER'})}>
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
            <TouchableOpacity onPress={() =>  {
              login();
              console.log(userToken);
              }}>
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
    borderColor:'#4d1637'
  },
  inputStyle: {fontSize: scale(fontSizeBig), color: 'black', fontFamily: FONT},
  labelStyle: {fontSize: scale(fontSizeBig)},
  textErrorStyle: {fontSize: 16},
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
