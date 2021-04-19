import React from 'react';
import Container from '../../components/Container';
import {Button, Headline} from 'react-native-paper';

export default function HomePage({navigation}) {
  return (
    <Container>
      <Headline style={{textAlign: 'center', marginBottom: '20%'}}>
        Portfolio
      </Headline>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Login')}
        style={{marginBottom: 20}}>
        Login
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('RegisterHomePage')}>
        Register
      </Button>
    </Container>
  );
}
