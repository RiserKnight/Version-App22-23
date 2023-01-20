import React ,{createContext , useState ,useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
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
        axios.post('https://reqres.in/api/login',{
            "email":id,
            "password":password
        }).then(res => {
            setIsLoading(false);
            console.log("aay");
            // setErrorText("Something went wrong"); //when error
            setUserToken(res.data.token);
            console.log(res.data.token)
            AsyncStorage.setItem('userToken',res.data.token);
        }).catch(e=>{
            setError(true);
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
        setIsLoading(false);
    }
    const isLoggedIn = async () => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
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