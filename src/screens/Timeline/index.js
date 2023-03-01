/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Day1 from './Day1';
import Day2 from './Day2';
import axios from 'axios';
import { BASE_URL , KEY } from '../../utils/constants';
import Loader from '../loading/index';
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {events} from "../../mobx/eventsData";
import {observer} from 'mobx-react';
import { useNavigation } from '@react-navigation/native';
const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
  const TabOneScreen= observer(()=>{
    const navigation = useNavigation();
    const eve = events.state.eventData;
    const [selectedId, setSelectedId] = useState(null);
    const[isLoading,setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [hasError, setHasError] = useState(false);
    const getEvent = () => {
        setHasError(false);
        setIsLoading(true);
        axios.post(`${BASE_URL}`+'/getEventData',{
            "app_key":KEY.APP_KEY
        }).then(res => {
            setIsLoading(false);
            console.log("is loadingR="+isLoading);
            setIsLoading(false);
            // console.log(JSON.stringify(res.data));
            events.setAdminData(res.data);
            // console.log(resD.data);
            console.log("api call to hogaya bhai");
        }).catch(e=>{
            setIsLoading(false);
            console.log("is loadingR="+isLoading);
            console.log("aayaaaeerr");
            setIsLoading(false);
            setHasError(true);
            setErrorText("Something went wrong");
            console.log(e);
        })
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            getEvent();
        });
        console.log(eve);
        return unsubscribe;
    },[navigation]);
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
    return(
      <>
      <Loader isLoading={isLoading} />
        <Tab.Navigator style = {{fontWeight:'bold',fontSize:16}}
        screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarIndicatorStyle: {backgroundColor: '#4d1637'},
        tabBarLabelStyle: { fontSize: 12 },
      }}>
        {/* <Tab.Screen name="17/03/2023" component={Day0}/> */}
        <Tab.Screen name="18/03/2023" children={()=><Day1 events={eve}/>}/>
        <Tab.Screen name="19/03/2023" component={Day2}/>
        </Tab.Navigator>
        </>
    )
    })




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default TabOneScreen;
