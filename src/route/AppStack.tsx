import {createStackNavigator} from '@react-navigation/stack';
import { Text } from 'react-native';
import { HomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={()=> <Text>Home screen</Text>} />
    </Stack.Navigator>
  );
}