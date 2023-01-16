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
  Keyboard,
} from 'react-native';


import {verticalScale, scale} from 'react-native-size-matters';
import FeedbackLottie from '../../assets/lottieFiles/feed.json';
import {Black, Coral, White} from '../../utils/colors';
import {
  FONT,
  fontSizeBig,
  paddingMedium,
  paddingSmall,
} from '../../utils/UIConstants';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Feedback = observer(({navigation}) => {
    const PostFeedback = () => {
      };
      
  const onPressHandler = () => {
    console.log(FEEDBACK_STORE.getMessage.trim() + 'bhai');
    if (!FEEDBACK_STORE.getMessage.trim()) {
      FEEDBACK_STORE.setError(true);
      FEEDBACK_STORE.setErrorText(INVALID_FEEDBACK);
    } else {
      PostFeedback();
    }
  };

  return (
    // <>
    //   {FEEDBACK_STORE.isLoading ? (
    //     <LoaderPage navigation={navigation} />
    //   ) : (
    //     <>
    //       {FEEDBACK_STORE.getError ? (
    //         <ErrorScreen
    //           navigation="show"
    //           errorMessage={FEEDBACK_STORE.getErrorText}
    //           // useOnlyFn={true}
    //           fn={() => {
    //             navigation = {navigation};
    //             FEEDBACK_STORE.reset();
    //           }}
    //         />
    //       ) : (
    //         <>
    //           {FEEDBACK_STORE.getSuccess ? (
    //             <SuccessScreen
    //               navigation="show"
    //               buttonText="Home"
    //               useOnlyFn={true}
    //               fn={() => {
    //                 navigation = navigation.goBack();
    //                 FEEDBACK_STORE.reset();
    //               }}
    //             />
    //           ) : (
                <>
                  <ScrollView
                    onScroll={() => {
                      Keyboard.dismiss();
                    }}>
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
                      <TextInput
                        style={styles.input}
                        inputStyle={{
                          fontSize: scale(fontSizeBig),
                        }}
                        labelStyle={{fontSize: scale(fontSizeBig)}}
                        placeholder="Give your feedback here"
                        autoFocus={true}
                        placeholderTextColor="gray"
                        multiline={true}
                        focusColor="black"
                        autoCapitalize="none"
                        onChangeText={text => {
                        //   FEEDBACK_STORE.setMessage(text);
                        }}
                        // value={message}
                      />
                      <TouchableOpacity
                        style={styles.button}
                       // onPress={}
                       >
                        <Text
                          style={{
                            textAlign: 'center',
                            fontFamily: FONT,
                            fontWeight: 'bold',
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