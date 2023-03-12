/* eslint-disable prettier/prettier */
import React, { useState ,useEffect} from "react";
import {Image, ImageBackground, View, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import {Events }from '../../utils/events';
import axios from 'axios';
import { BASE_URL , KEY } from '../../utils/constants';
import Loader from '../loading/index';
import {scale, verticalScale,moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@ui-kitten/components';
import LottieView from 'lottie-react-native';
import {events} from "../../mobx/eventsData";
import {observer} from 'mobx-react';
const Completed = observer(() => {
    const navigation = useNavigation();
    const eve = events.state.eventData;
    const [selectedId, setSelectedId] = useState(null);
    const[isLoading,setIsLoading] = useState(false);
    const [errorText, setErrorText] = useState('Try Again');
    const [hasError, setHasError] = useState(false);
    const [data,setData] = useState([]);
    const getEvent = () => {
        setHasError(false);
        setIsLoading(true);
        events.setAdminData([]);
        axios.post(`${BASE_URL}`+'/getEventData',{
            "app_key":KEY.APP_KEY
        })
        .then(res => {
            setIsLoading(false);
            console.log("is loadingR="+isLoading);
            setIsLoading(false);
            // console.log(res.data);
            events.setAdminData(res.data);
            console.log("api call to hogaya bhai");
        }).catch(e=>{
            setIsLoading(false);
            console.log("is loadingR="+isLoading);
            console.log("aayaaaeerr");
            setHasError(true);
            setErrorText("Something went wrong");
            console.log(e);
        })
    }
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action and update data
            getEvent();
        });
        
        console.log(eve);
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
        // getEvent();
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
            navigation.navigate('Home')}}>
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
    const Item = ({ item, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={() => navigation.navigate('EventDescriptionScreen',{item})} style={[styles.items, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.title}</Text>
            <View style= {styles.Dtime}>
                <Image style= {{height:30, width:30}} source={require("../../assets/icons/schedule.png")}/>
                <View style= {{marginLeft: 10}}>
                    <View style= {{flexDirection:'row'}}>
                        <Text style={[{fontSize:16, fontWeight:'bold', width:'90%'}, textColor]}>{item.StartDate}</Text>
                        <Text style={[{fontWeight:'900', fontSize:16, width:'5%'}, textColor]}>></Text>
                    </View>
                    <Text style= {textColor}>{item.time1}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item,navigation }) => {
        const backgroundColor =  "white";
        const color = 'black';
       
        return (
            <Item
                item={item}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
            <View style= {styles.list}>
                <Loader isLoading={isLoading} />
                <FlatList
                    data={eve}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    showsVerticalScrollIndicator={false}
                />
            </View>
    );
});
const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#4d1637',
       // flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    items: {

        borderRadius: 10,
        padding:'3%',
        marginVertical:5,
        marginHorizontal: 5,
    },
    title: {
       
        fontSize: 20,
        fontWeight: 'bold',
    },
    Dtime:{
        
        flex:2,
        flexDirection:'row',
    },
    list:{
        padding:3,
        margin:'5%',
        marginTop:0,
        backgroundColor:'#4d1637',
        borderBottomRightRadius:15,
        
        borderBottomLeftRadius:15,
    }
});
export default Completed;
