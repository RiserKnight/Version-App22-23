import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
import Reset from '../../screens/Reset';
import ResetPassword from '../../screens/Reset/password'
import {FONT} from '../../utils/UIConstants';
import Otp from '../../screens/otp/index';
import SetPassword from '../../screens/Reset/setPassword'
const Stack = createNativeStackNavigator();

function AuthNavigator() {
return (
    <Stack.Navigator  screenOptions={{
    headerShown: false
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Otp" component={Otp} />
    <Stack.Screen name="Reset" component={Reset} options={{headerShown: true, animation: 'slide_from_right',headerStyle: {
            backgroundColor: '#4d1637',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily:FONT
          },}} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: true, animation: 'slide_from_right',headerStyle: {
    backgroundColor: '#4d1637',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily:FONT
    },}} />
     <Stack.Screen name="SetPassword" component={SetPassword} options={{headerShown: true, animation: 'slide_from_right',headerStyle: {
    backgroundColor: '#4d1637',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    fontFamily:FONT
    },}} />
    </Stack.Navigator>

);
}

export default AuthNavigator;