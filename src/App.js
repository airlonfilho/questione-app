import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { AuthProvider } from './contexts/auth';

export default function App() {
  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <Routes />
    </AuthProvider>
  );
}
