import { View, Text, Button } from 'react-native'
import React, { FC } from 'react'
import { useAuth } from '../context/AuthContext';

type Props = {}

const HomeScreen = (props: Props) => {
  const auth = useAuth();

  return (
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
      <Text>HOME SCREEN</Text>
      <Button title="Sign Out" onPress={auth.signOut} />
    </View>
  );
}

export {HomeScreen}