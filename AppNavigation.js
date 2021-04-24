import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigationStack from './src/features/authentication/NavigationStack';
import StudentNavigationStack from './src/features/student/NavigationStack';
import EmployerNavigationStack from './src/features/employer/NavigationStack';
import InstituteNavigationStack from './src/features/institute/NavigationStack';
import {useDispatch, useSelector} from 'react-redux';
import {authenticationService} from './src/lib/dependencies.js';
import actions from './src/redux/actions';

export default function AppNavigation() {
  const dispatch = useDispatch();
  const {isAuthenticated, mode} = useSelector(state => state.authentication);
  const modeStack = {
    student: <StudentNavigationStack />,
    employer: <EmployerNavigationStack />,
    institute: <InstituteNavigationStack />,
  };

  useEffect(() => {
    // dispatch(actions.authentcationActions.login('student'));
    // dispatch(actions.userActions.setUserInfo({firstName: 'Thitirat'}));
    // dispatch(actions.authentcationActions.logout());
  }, []);

  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthNavigationStack />}
      {isAuthenticated && modeStack[mode]}
    </NavigationContainer>
  );
}
