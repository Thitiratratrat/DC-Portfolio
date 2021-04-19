import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import RequestPage from './RequestPage';

const StudentStack = createStackNavigator();

const StudentNavigationStack = () => {
  return (
    <StudentStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <StudentStack.Screen name="Home" component={HomePage} />
      <StudentStack.Screen name="Request" component={RequestPage} />
    </StudentStack.Navigator>
  );
};

export default StudentNavigationStack;
