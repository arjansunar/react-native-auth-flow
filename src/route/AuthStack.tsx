import {createStackNavigator} from '@react-navigation/stack';
import { SignInScreen } from '../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Sign In Screen" component={SignInScreen} />
      </Stack.Navigator>
    );
  };