import React ,{createContext , useState ,useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import {UserData} from '../mobx/userData';
import {BASE_URL,KEY} from '../utils/constants';
import * as KEYS from '../utils/Storage_keys';

export const AuthContext = createContext();

export const AuthProvider = ({children,navigation}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userToken,setUserToken] = useState(null);
    const [hasError,setError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const login = (id,password) => {
        setIsLoading(true);
        setError(false);
        setErrorText('');
        console.log(KEY.APP_KEY);
        axios.post(`${BASE_URL}`+'/login',{
            "userID":id,
            "pass":password,
            "app_key":KEY.APP_KEY
        }).then(res => {
            setIsLoading(false);
            console.log("api call hua");
            console.log(res.data.success);
            // setErrorText("Something went wrong"); //when error
            if(res.data.success=='true'){
                console.log("user mila");
                AsyncStorage.setItem(KEYS.USER_TOKEN, res.data.data.token);
                AsyncStorage.setItem(KEYS.USER_NAME,res.data.data.name);
                AsyncStorage.setItem(KEYS.USER_ID,res.data.data.userID+' ');//async cant handle bool or nos
                AsyncStorage.setItem(KEYS.USER_COLLEGE,res.data.data.university);
                setUserToken(res.data.data.token);
                console.log(res.data.data.token)
                AsyncStorage.setItem('userToken',res.data.data.token);
                UserData.setName(res.data.data.name);
                UserData.setCollege(res.data.data.university);
                UserData.setUserId(res.data.data.userID+' ');
                console.log(UserData.userName);
                // UserData.setPhone(response.data.isAdmin);
                UserData.setToken(res.data.token); //
            }
            else{
                setError(true);
                if(res.data.code=='000'){
                    setErrorText("Unauthorized");
                }
                else{
                    setErrorText("Invalid Credentials");
                }
            }
        }).catch(e=>{
            setError(true);
            setErrorText("Something went wrong");
            setIsLoading(false);
            console.log(e);
        })
        // setUserToken('abc123');
        // AsyncStorage.setItem('userToken','abc123');
        // setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('KEYS.USER_TOKEN');
        AsyncStorage.removeItem('KEYS.USER_NAME');
        AsyncStorage.removeItem('KEYS.USER_ID');
        AsyncStorage.removeItem('KEYS.USER_COLLEGE');
        UserData.setName('');
        UserData.setCollege('');
        UserData.setUserId('');
        UserData.setToken(''); //
        setIsLoading(false);
    }
    const isLoggedIn = async () => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            console.log(userToken);
            setUserToken(userToken);
            setIsLoading(false);
        }catch(e){
         
            console.log("isLoggedIn error ${e}");
        }
    }

    useEffect(() => {
        isLoggedIn();
    },[]);

    return (
        <AuthContext.Provider value={{login,logout,isLoading,userToken,hasError,setIsLoading,setError,errorText,setErrorText}}>
            {children}
        </AuthContext.Provider>
    );
}