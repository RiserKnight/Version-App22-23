import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Register from '../../screens/Register';
const Stack = createNativeStackNavigator();

function AuthNavigator() {
return (
    <Stack.Navigator  screenOptions={{
    headerShown: false
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>

);
}

export default AuthNavigator;