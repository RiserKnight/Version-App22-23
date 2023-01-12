import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import Contacts from '../../screens/contacts';
import Notification from '../../screens/notification';
import { navigationRef } from '../RooNavigation';
import TabOneScreen from '../../screens/Timeline/index';
import Events from '../../screens/Events/index';
import { NavigationContainer } from '@react-navigation/native';
import {FONT} from '../../utils/UIConstants';
const Stack = createNativeStackNavigator();

function AppNavigator() {
return (
    <NavigationContainer ref={navigationRef} independent={true}>
    <Stack.Navigator >
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    <Stack.Screen name="Committee" component={Contacts} options={{headerShown: true, animation: 'slide_from_right',headerStyle: {
            backgroundColor: '#4d1637',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily:FONT
          },}} />
    <Stack.Screen name="Notification" component={Notification} options={{headerShown: true, animation: 'slide_from_right',}} />
    <Stack.Screen name="Timeline" component={TabOneScreen} options={{headerShown: true, animation: 'slide_from_right',headerStyle: {
            backgroundColor: '#4d1637',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily:FONT
          },}} />
   <Stack.Screen name="Events" component={Events} options={{headerShown: true, animation: 'slide_from_right',headerStyle: {
            backgroundColor: '#4d1637',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily:FONT
          },}} />
    </Stack.Navigator>
    </NavigationContainer>
);
}

export default AppNavigator;