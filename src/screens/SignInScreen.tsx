import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '../context/AuthContext';

type Props = {}

export const SignInScreen = (props: Props) => {
  const auth = useAuth();

  return (
    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
      <Text>Sign In Screen hello </Text>
      <Button title="Sign In" onPress={auth.signIn} />
    </View>
  );  
}
