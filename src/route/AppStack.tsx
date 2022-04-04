import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}