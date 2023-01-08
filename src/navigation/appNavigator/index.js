import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Contacts from '../../screens/contacts'
import Notification from '../../screens/notification';
import { navigationRef } from '../RooNavigation';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function AppNavigator() {
return (
    <NavigationContainer ref={navigationRef} independent={true}>
    <Stack.Navigator >
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    <Stack.Screen name="Contacts" component={Contacts} options={{headerShown: true, animation: 'slide_from_right',}} />
    <Stack.Screen name="Notification" component={Notification} options={{headerShown: true, animation: 'slide_from_right',}} />
    </Stack.Navigator>
    </NavigationContainer>
);
}

export default AppNavigator;