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
import Slider from './slider'
import TabOneScreen from '../Timeline/index'
import EventDescriptionScreen from '../Events/index'
import {
  borderRadiusLarge,
  fontSizeBig,
  fontSizeSmall,
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
                  fill='white'
                  name="person-outline"
                />

                <Text numberOfLines={1} style={styles.textDashBoard}>
                  {data.studentName}
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={styles.iconDashBoard}
                  fill='white'
                  name="hash-outline"
                />
                <Text style={[styles.textDashBoard]}>{data.studentRollNo}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  style={styles.iconDashBoard}
                  fill='white'
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
                  fill='#4d1637'
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
            source={require('../../assets/icons/header.png')}
            style={{
              flex: 1,
              height: verticalScale(120),
              marginTop:verticalScale(25)
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
                    fill='white'
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
                  marginTop:scale(70),
                  marginLeft: scale(20),
                  fontSize: scale(20),
                  fontWeight: 'bold',
                  fontFamily: FONT,
                  color: '#4d1637'
                }}>
                Welcome {data.studentName} !
              </Text>
      </View>
        <Slider/>
      <View style={styles.cardRow}>
      <View style={{flexDirection: 'column'}}>
              <View style={styles.shadow}>
                <Card style={[styles.card, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Events', {screenType: 'Events'});
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/events.png')}
                      style={{
                        height: verticalScale(40),
                        width: scale(40),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>

                  </TouchableOpacity>
                </Card>
              </View>
              <View
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.textMainMenu}>Events</Text>
                </View>
                </View>

              <View style={{flexDirection: 'column'}}>
              <View style={styles.shadow}>
                <Card style={[styles.card, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Timeline', {screenType: 'Timeline'});
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/timeline.png')}
                      style={{
                        height: verticalScale(40),
                        width: scale(40),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>
                  </TouchableOpacity>
                </Card>
              </View>
              <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textMainMenu}>Timeline</Text>
              </View>
              </View>

              <View style={{flexDirection: 'column'}}>
              <View style={styles.shadow}>
                <Card style={[styles.card, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('Committee', {screenType: 'Committee'});
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/team.png')}
                      style={{
                        height: verticalScale(40),
                        width: scale(40),
                        justifyContent: 'center',
                        alignSelf: 'center',
                      }}></ImageBackground>
                  </TouchableOpacity>
                </Card>
              </View>
              <View
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.textMainMenu}>Committee's</Text>
                    </View>
              </View>
              </View>

              {/* 2nd row */}

              <View style={styles.cardRow}>
              <View style={{flexDirection: 'column'}}>
              <View style={styles.shadow}>
                <Card style={[styles.card, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{

                        height: verticalScale(40),
                        width: scale(40),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>
                  </TouchableOpacity>
                </Card>
              </View>
              <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textMainMenu}>some screen</Text>
              </View>
              </View>

              <View style={{flexDirection: 'column'}}>
              <View style={styles.shadow}>
                <Card style={[styles.card, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{
                        height: verticalScale(40),
                        width: scale(40),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>
                  </TouchableOpacity>
                </Card>
              </View>
              <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textMainMenu}>some screen</Text>
              </View>
              </View>

              <View style={{flexDirection: 'column'}}>
              <View style={styles.shadow}>
                <Card style={[styles.card, styles.elevation]}>
                  <TouchableOpacity
                    onPress={() => {
                    }}>
                    <ImageBackground
                      source={require('../../assets/icons/demo.png')}
                      style={{
                        height: verticalScale(40),
                        width: scale(40),
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}></ImageBackground>
                  </TouchableOpacity>
                </Card>
              </View>
              <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textMainMenu}>some screen</Text>
              </View>
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
  backgroundColor: '#4d1637',
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
  color: 'cyan',
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
card: {
  marginTop: verticalScale(20),
  height: verticalScale(60),
  width: scale(65),
  justifyContent: 'center',
  alignItems: 'center',
  //borderRadius: scale(borderRadiusLarge),
  borderWidth: scale(1.5),
  borderColor: '#4d1637',
},

shadow: {
  shadowColor: '#4d1637',
  shadowOffset: {width: 7, height: 7},
  shadowOpacity: 0.8,
  shadowRadius: 3,
},
elevation: {
  elevation: 5,
  shadowColor: '#4d1637',
  backgroundColor: Colors.White,
},
textMainMenu: {
  textAlign: 'center',
  textAlignVertical: 'top',
  fontSize: scale(fontSizeSmall-1),
  color: Colors.Black,
  fontFamily: FONT,
},
iconMainMenu: {
  width: scale(iconLarge),
  height: verticalScale(iconLarge),
},
});

export default Home;
