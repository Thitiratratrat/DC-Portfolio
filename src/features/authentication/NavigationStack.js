import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterHomePage from './RegisterHomePage';
import StudentRegisterPage from './StudentRegisterPage';
import InstituteRegisterPage from './InstituteRegisterPage';
import EmployerRegisterPage from './EmployerRegisterPage';
import OTPVerificationPage from './OTPVerificationPage';

const AuthStack = createStackNavigator();

const AuthNavigationStack = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Home" component={HomePage} />
      <AuthStack.Screen name="Login" component={LoginPage} />
      <AuthStack.Screen name="RegisterHomePage" component={RegisterHomePage} />
      <AuthStack.Screen
        name="StudentRegisterPage"
        component={StudentRegisterPage}
      />
      <AuthStack.Screen
        name="InstituteRegisterPage"
        component={InstituteRegisterPage}
      />
      <AuthStack.Screen
        name="EmployerRegisterPage"
        component={EmployerRegisterPage}
      />
      <AuthStack.Screen
        name="OTPVerificationPage"
        component={OTPVerificationPage}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigationStack;
