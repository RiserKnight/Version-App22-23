import {AuthContext} from '../../context/AuthContext';
import CustomAlert from '../../components/customAlert';
import React, {useState, useEffect ,useContext} from 'react';

import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
  Alert,
  Linking,
  Pressable,
} from 'react-native';
import {Layout, Card, Icon} from '@ui-kitten/components';
import * as Colors from '../../utils/colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {SafeAreaView,ScrollView} from 'react-native';
import Contacts from '../contacts';
import PushNotification from "react-native-push-notification";
import {
  borderRadiusLarge,
  fontSizeBig,
  paddingMedium,
  paddingSmall,
  iconLarge,
  iconMedium,
  fontSizeVeryLarge,
  FONT,
  fontSizeMedium,
} from '../../utils/UIConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import Notification from '../notification';
const Home = ({navigation}) => {
  const {logout,userToken}= useContext(AuthContext);
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [sideNavVisible, setSideNavVisible] = useState(false);
  const logOut = () => {
    Alert.alert(
      'Logout?',
      'You will return to login screen',
      [
        {
          text: 'NO',
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            console.log(userToken);
            logout();
          },
        },
      ],
      {cancelable: false},
    );
  };
  let sideNavItemsList = [
    {
      name: 'Feedback',
      icon: 'message-square',
      key: 2,
      onPress: () => {
        navigation.navigate('FeedbackScreen');
        setSideNavVisible(false);
      },
    },
    {
      name: 'Logout',
      icon: 'log-out-outline',
      onPress: () => {
        setSideNavVisible(false);
        logOut();
      },
      key: 7,
    },
  ];
  const data = {
    studentName:'Umang',
    studentRollNo: 205121099,
    studentCollege: 'NIT-T',
  };
  const handleNotification = () => {

    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
        channelId: "test-channel",
        title: "You clicked on ",
        message: "notification",
        bigText: " is one of the largest and most beatiful cities in " ,
        
      
    });

    PushNotification.localNotificationSchedule({
        channelId: "test-channel",
        title: "Alarm",
        message: "You clicked on  20 seconds ago",
        date: new Date(Date.now() + 20 * 1000),
        allowWhileIdle: true,
    });
}
    return (
      <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
      <CustomAlert
          title={'Logout?'}
          message={'You will return to login screen'}
          modalVisible={logoutVisible}
          setModalVisible={setLogoutVisible}
          buttons={[
            {
              text: 'NO',
            },
            {
              text: 'YES',
              func: () => {
                logOut();
              },
            },
          ]}
        />
        {sideNavVisible && (
          <View style={styles.sideNav}>
            <View style={styles.sideNavTop}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={styles.iconDashBoard}
                  fill={Colors.Black}
                  name="person-outline"
                />

                <Text numberOfLines={1} style={styles.textDashBoard}>
                  {data.studentName}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={styles.iconDashBoard}
                  fill={Colors.Black}
                  name="hash-outline"
                />
                <Text style={[styles.textDashBoard]}>{data.studentRollNo}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={styles.iconDashBoard}
                  fill={Colors.Black}
                  name="book-outline"
                />
                <Text numberOfLines={1} style={styles.textDashBoard}>
                  {data.studentCollege}
                </Text>
              </View>
            </View>
            {sideNavItemsList.map((item, i) => (
              <TouchableOpacity
                style={styles.sideNavItems}
                onPress={item.onPress}
                key={i}>
                <Icon
                  style={styles.iconDashBoard}
                  fill='#842DCE'
                  name={item.icon}
                />
                <Text style={styles.sideNavItemsText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {sideNavVisible && (
          <TouchableOpacity
            onPress={() => setSideNavVisible(false)}
            style={styles.sideNavRest}
            activeOpacity={0.5}></TouchableOpacity>
        )}

        <View style={styles.dashboard}>
          <ImageBackground
            source={require('../../assets/icons/headerimg1.png')}
            style={{
              flex: 1,
              height: verticalScale(120),
            }}
            resizeMode="cover">
            <View style={styles.headingContainer}>
              <View style={styles.orientationTitleContainer}>
                <Text style={styles.orientationTitleText}>
                  {data.orientationTitle}
                </Text>
              </View>
              <View style={styles.sideNavBarBtn}>
                <TouchableOpacity onPress={() => setSideNavVisible(true)}>
                  <Icon
                    style={styles.iconDashBoard}
                    fill={Colors.DashboardLogo}
                    name="menu-outline"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
    
      <ScrollView contentContainerStyle={styles.mainMenu}>
      <View>
              <Text
                style={{
                  marginLeft: scale(40),
                  fontSize: scale(20),
                  fontWeight: 'bold',
                  fontFamily: FONT,
                  color: Colors.Black
                }}>
                Welcome!
              </Text>
      </View>
      <View style={styles.cardRow}>
              <View style={styles.shadow}>
                <Card style={[styles.card1, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      handleNotification();
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/events.png')}
                      style={{
                        height: verticalScale(50),
                        width: scale(50),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.textMainMenu}>Events</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
              <View style={styles.shadow}>
                <Card style={[styles.card2, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{
                        marginLeft:20,
                        height: verticalScale(50),
                        width: scale(50),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={styles.textMainMenu}>some screen</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
            <View style={styles.cardRow}>
              <View style={styles.shadow}>
                <Card style={[styles.card3, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Contacts', {screenType: 'Contacts'});
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/team.png')}
                      style={{
                        height: verticalScale(50),
                        width: scale(50),
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}></ImageBackground>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.textMainMenu}>Committee's</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
              <View style={styles.shadow}>
                <Card style={[styles.card4, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{
                        height: verticalScale(40),
                        width: scale(50),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: verticalScale(10),
                        marginBottom: verticalScale(20),
                      }}></ImageBackground>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.textMainMenu}>not</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>

            <View style={styles.cardRow}>
              <View style={styles.shadow}>
                <Card style={[styles.card5, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{
                        height: verticalScale(50),
                        width: scale(50),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: verticalScale(10),
                      }}></ImageBackground>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.textMainMenu}>some screen</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
              <View style={styles.shadow}>
                <Card style={[styles.card6, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                     
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{
                        height: verticalScale(50),
                        width: scale(50),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: verticalScale(5),
                      }}></ImageBackground>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.textMainMenu}>some screen</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
        </ScrollView>
      </Layout>
    </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
dashboard: {
  height: verticalScale(90),
  backgroundColor: Colors.White,
},
headingContainer: {
  height: verticalScale(90),
},
orientationTitleContainer: {
  marginTop: verticalScale(30),
  marginLeft: scale(35),
  alignItems: 'flex-start',
  justifyContent: 'center',
},
sideNavBarBtn: {
  marginTop: verticalScale(-50),
  paddingRight: scale(paddingSmall),
  alignItems: 'flex-start',
  paddingLeft: 5,
},
sideNav: {
  width: 300,
  backgroundColor: '#f2f2f2',
  zIndex: 2,
  position: 'absolute',
  height: windowHeight,
},
sideNavHeading: {
  fontSize: scale(fontSizeVeryLarge),
  fontWeight: '500',
},
sideNavTop: {
  padding: scale(10),
  paddingTop: scale(50),
  marginBottom: scale(15),
  backgroundColor: '#842DCE',
},
sideNavRest: {
  height: windowHeight,
  position: 'absolute',
  width: windowWidth,
  backgroundColor: Colors.Black,
  zIndex: 1,
  opacity: 0.5,
},
sideNavItems: {
  margin: 15,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
},
sideNavItemsText: {
  color:'black',
  paddingLeft: 10,
  fontFamily: FONT,
},
detailsContainer: {
  flex: 1,
  paddingLeft: scale(paddingSmall),
  justifyContent: 'center',
  paddingRight: scale(paddingSmall),
},
iconDashBoard: {
  width: scale(iconMedium),
  height: verticalScale(iconMedium),
},
orientationTitleText: {
  fontSize: scale(fontSizeVeryLarge),
  color: Colors.Black,
  fontFamily: FONT,
},
textDashBoard: {
  fontSize: scale(fontSizeBig),
  color: Colors.Black,
  fontFamily: FONT,
  flex: 1,
},
mainMenu: {
  flexGrow: 1,
  // backgroundColor: '#f2f2f2',
  justifyContent: 'center',
  paddingBottom: verticalScale(10),
  justifyContent: 'center',
},
cardGrid: {
  justifyContent: 'center',
  alignItems: 'center',
},
cardRow: {
  flexDirection: 'row',
  // backgroundColor: '#f2f2f2',
  justifyContent: 'space-evenly',
},
card1: {
  marginTop: verticalScale(20),
  height: verticalScale(140),
  width: scale(140),
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: scale(borderRadiusLarge),
  borderWidth: scale(2),
  borderColor: '#842DCE',
},
card2: {
  marginTop: verticalScale(20),
  height: verticalScale(140),
  width: scale(140),
  borderRadius: scale(borderRadiusLarge),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.White,
  borderWidth: scale(2),
  borderColor: '#842DCE',
},
card3: {
  height: verticalScale(140),
  width: scale(140),
  marginTop: verticalScale(20),
  justifyContent: 'center',
  borderRadius: scale(borderRadiusLarge),
  alignItems: 'center',
  backgroundColor: Colors.White,
  borderWidth: scale(2),
  borderColor: '#842DCE',
},
card4: {
  marginTop: verticalScale(20),
  height: verticalScale(140),
  width: scale(140),
  justifyContent: 'center',
  borderRadius: scale(borderRadiusLarge),
  alignItems: 'center',
  backgroundColor: Colors.White,
  borderWidth: scale(2),
  borderColor: '#842DCE',
},
card5: {
  marginTop: verticalScale(20),
  height: verticalScale(140),
  width: scale(140),
  borderRadius: scale(borderRadiusLarge),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.White,
  borderWidth: scale(2),
  borderColor: '#842DCE',
},
card6: {
  marginTop: verticalScale(20),
  height: verticalScale(140),
  width: scale(140),
  borderRadius: scale(borderRadiusLarge),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: Colors.White,
  borderWidth: scale(2),
  borderColor: '#842DCE',
},
shadow: {
  shadowColor: '#842DCE',
  shadowOffset: {width: 7, height: 7},
  shadowOpacity: 0.8,
  shadowRadius: 3,
},
elevation: {
  elevation: 5,
  shadowColor: '#842DCE',
  backgroundColor: Colors.White,
},
textMainMenu: {
  textAlign: 'center',
  textAlignVertical: 'top',
  fontSize: scale(fontSizeMedium),
  color: Colors.Black,
  fontFamily: FONT,
},
iconMainMenu: {
  width: scale(iconLarge),
  height: verticalScale(iconLarge),
},
});

export default Home;
