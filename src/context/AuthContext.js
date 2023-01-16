import React ,{createContext , useState ,useEffect} from 'react';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(true);
    const [userToken,setUserToken] = useState(null);

    const login = (id,password) => {
        setIsLoading(true);
        // axios.post('https//192.168.29.227:3000/login',{
        //     id,
        //     password
        // }).then(res => {
        //     console.log("aay");
        // }).catch(e=>{
        //     console.log(e);
        // })
        setUserToken('abc123');
        AsyncStorage.setItem('userToken','abc123');
        setIsLoading(false);
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
        <AuthContext.Provider value={{login,logout,isLoading,userToken}}>
            {children}
        </AuthContext.Provider>
    );
}