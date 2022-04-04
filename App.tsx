import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import { Router } from './src/route';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

