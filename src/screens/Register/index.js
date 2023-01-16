import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import {StyleSheet, Text, View, TouchableOpacity,ScrollView, ImageBackground} from 'react-native';
import {TextInput} from 'react-native-element-textinput';
import {Black} from '../../utils/colors';
import LottieView from 'lottie-react-native';
import loginLottie from '../../assets/lottieFiles/signup.json';
import {Icon} from '@ui-kitten/components';
import {Login} from '../Login';
import axios from 'axios';
import {
  FONT,
  fontSizeBig,
  fontSizeVeryLarge,
  paddingMedium,
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
    const handleApI = async () =>{
      try {
        const response = await axios.post(`http://localhost:3000/register`, {
          name,
          email,
          college,
          phone,
          password,
        });
        if (response.success) {
          alert(` You have created: ${JSON.stringify(response.data)}`);
          // setIsLoading(false);
          // setFullName('');
          // setEmail('');
        } else {
          throw new Error("An error has occurred");
        }
      } catch (error) {
        alert("An error has occurred");
        console.log(error);
        // setIsLoading(false);
      }
    }
    return (
      <View style={{backgroundColor:'white'}}>
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
            onPress={() =>navigation.goBack()}>
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
            <TouchableOpacity onPress={() =>{  
             console.log(name+" "+email+" "+college+" "+phone+" "+password)
              handleApI();
              navigation.goBack()}}>
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
    borderColor:'#4d1637'
  },
  inputStyle: {fontSize: scale(fontSizeBig), color: 'black', fontFamily: FONT},
  labelStyle: {fontSize: scale(fontSizeBig)},
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