import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './screens/sign-in/SignIn';
import ForgotPassword from './screens/forgot-password/ForgotPassword';
import SignUp from './screens/sign-up/SignUp';
import Home from './screens/home/Home';
import EnterCode from './screens/enter-code/EnterCode';
import { colors } from './components';

Icon.loadFont();
const Stack = createStackNavigator();

const defaultOptions = {
  headerStyle: { backgroundColor: colors.white },
  headerTitleAlign: 'center',
  headerTintColor: colors.primaryColor,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
    color: colors.textColor,
    fontWeight: 'bold',
  },
};

export const routesNames = {
  login: 'Login',
  forgotPassword: 'ForgotPassword',
  signUp: 'SignUp',
  home: 'Home',
  enterCode: 'EnterCode',
};

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routesNames.login}
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routesNames.forgotPassword}
          component={ForgotPassword}
          options={{ ...defaultOptions, title: 'Esqueci minha senha' }}
        />
        <Stack.Screen
          name={routesNames.signUp}
          component={SignUp}
          options={{
            ...defaultOptions,
            title: 'Criar conta',
          }}
        />
        <Stack.Screen
          name={routesNames.home}
          component={Home}
          options={{
            ...defaultOptions,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={routesNames.enterCode}
          component={EnterCode}
          options={{ ...defaultOptions, title: 'Realizar Avaliação' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
