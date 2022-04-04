import {NavigationContainer} from '@react-navigation/native';
import { Text } from 'react-native';
import { useAuth } from '../context/AuthContext';

import {AppStack} from './AppStack'
import {AuthStack} from './AuthStack'

export const Router = () => {
  const {authData, loading} = useAuth()
  if (loading){
    return <Text>Loading....</Text>
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};