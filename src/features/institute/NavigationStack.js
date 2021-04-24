import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import UploadFilePage from './UploadFilePage';

const InstituteStack = createStackNavigator();

const InstituteNavigationStack = () => {
  return (
    <InstituteStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <InstituteStack.Screen name="Home" component={HomePage} />
      <InstituteStack.Screen name="UploadFile" component={UploadFilePage} />
    </InstituteStack.Navigator>
  );
};

export default InstituteNavigationStack;
