import React from 'react';
import Container from '../../components/Container';
import {Button} from 'react-native-paper';

export default function RegisterHomePage({navigation}) {
  return (
    <Container>
      <Button
        mode="contained"
        style={{marginBottom: 20}}
        onPress={() => navigation.navigate('StudentRegisterPage')}>
        Student
      </Button>
      <Button
        mode="contained"
        style={{marginBottom: 20}}
        onPress={() => navigation.navigate('InstituteRegisterPage')}>
        Institute
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('EmployerRegisterPage')}>
        Employer
      </Button>
    </Container>
  );
}
