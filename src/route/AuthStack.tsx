import {createStackNavigator} from '@react-navigation/stack';
import { Text } from 'react-native';
import { SignInScreen } from '../screens';

const Stack = createStackNavigator();

export const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Sign In Screen" component={() => <Text>sign in </Text>} />
      </Stack.Navigator>
    );
  };