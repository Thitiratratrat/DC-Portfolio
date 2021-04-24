import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import StudentProfilePage from './StudentPortfolioPage';

const EmployerStack = createStackNavigator();

const EmployerNavigationStack = () => {
  return (
    <EmployerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <EmployerStack.Screen name="Home" component={HomePage} />
      <EmployerStack.Screen
        name="StudentProfile"
        component={StudentProfilePage}
      />
    </EmployerStack.Navigator>
  );
};

export default EmployerNavigationStack;
