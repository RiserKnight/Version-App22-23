import React, {useState, useRef, useEffect} from 'react';


import {observer} from 'mobx-react';
import LottieView from 'lottie-react-native';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import Loader from '../loading/index';
import {BASE_URL,KEY} from '../../utils/constants';
import {verticalScale, scale} from 'react-native-size-matters';
import FeedbackLottie from '../../assets/lottieFiles/feed.json';
import {Black, Coral, White} from '../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';
import {
  FONT,
  fontSizeBig,
  paddingMedium,
  paddingSmall,
} from '../../utils/UIConstants';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {UserData} from '../../mobx/userData';
const Feedback = observer(({navigation}) => {
  const[isLoading,setIsLoading] = useState(false);
  const [success,setSuccess] = useState(false);
  const [feed,setFeed] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorText, setErrorText] = useState('');
    const PostFeedback = () => {
      };
  const onPressHandler = () => {
    
    console.log(feed+ 'ji');
    if(feed.trim()==''||feed.trim()==null){
      alert("Please Enter valid feedback");
      return;
    }
    setIsLoading(true);
    setHasError(false);
    setErrorText('');
    axios.post(`${BASE_URL}`+'/feedback',{
      "userID":UserData.userId,
      "head" : "FeedBack",
      "body" : feed,
      "app_key":KEY.APP_KEY
  }).then(res => {
    console.log("is loadingR="+isLoading);
      setIsLoading(false);
      console.log("aayaaa");
      console.log(res.data);

      // navigation.navigate('SetPassword',{id:id});
      if(res.data.code==="100"){
        setSuccess(true);
        // navigation.navigate('SetPassword',{id:id});
      }
      else{
        setHasError(true);
        setErrorText("Unexpected Error");
      }
  }).catch(e=>{
    console.log("is loadingR="+isLoading);
    console.log("aayaaaeerr");
      setIsLoading(false);
      setHasError(true);
      setErrorText("Something went wrong");
      console.log(e);
  })
    setFeed('');
  };
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
          navigation.navigate('Feedback');}}
          >
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
  if (success) {
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
        marginBottom: verticalScale(30)
      }}>
    FeedBack Posted Successfully
    </Text>
    {/* <Text
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
    </Text> */}
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
          <TouchableOpacity onPress={()=> navigation.navigate('Home')} >
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
                <>
                <Loader isLoading={isLoading}/>
                  <ScrollView>
                        <LottieView
                      source={FeedbackLottie}
                      speed={1}
                      resizeMode="contain"
                      autoPlay={true}
                      loop
                      style={{
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: verticalScale(20),
                        height: verticalScale(200),
                        widhth: scale(120),
                      }}
                    />
                    <View style={styles.inputField}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                      <TextInput
                        style={styles.input}
                        inputStyle={{
                          fontSize: scale(fontSizeBig),
                        }}
                        value={feed}
                        labelStyle={{fontSize: scale(fontSizeBig)}}
                        placeholder="Give your feedback here"
                        autoFocus={true}
                        placeholderTextColor="gray"
                        multiline={true}
                        focusColor="black"
                        autoCapitalize="none"
                        onChangeText={text => {
                        //   FEEDBACK_STORE.setMessage(text);
                        setFeed(text);
                        }}
                        // value={message}
                      />
                      </TouchableWithoutFeedback>
                      <TouchableOpacity
                        style={styles.button}
                       onPress={onPressHandler}
                       >
                        <Text
                          style={{
                            textAlign: 'center',
                            fontFamily: FONT,
                            fontWeight: 'bold',
                            color:'white'
                          }}>
                          Submit
                        </Text>
                      </TouchableOpacity>
                    </View>
                    
                  </ScrollView>
                </>
    //           )}
    //         </>
    //       )}
    //     </>
    //   )}
    // </>
  );
});

const styles = StyleSheet.create({
  inputField: {
    marginTop: verticalScale(60),
  },
  input: {
    marginHorizontal: paddingMedium,
    marginTop: paddingSmall,
    borderWidth: scale(1),
    height: verticalScale(120),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
    fontFamily: FONT,
    color: Black

  },
  button: {
    marginTop: verticalScale(40),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor:'#4d1637',
    height: verticalScale(40),
    width: scale(120),
    borderRadius: scale(25),
  },
});

export default Feedback;