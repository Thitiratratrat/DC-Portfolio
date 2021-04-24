import React from 'react';
import Container from '../../components/Container';
import {Button, Headline} from 'react-native-paper';
import {useSelector} from 'react-redux';

export default function HomePage({navigation}) {
  const {registerInProcess} = useSelector(state => state.authentication);

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
        onPress={() =>
          registerInProcess
            ? navigation.navigate('OTPVerificationPage')
            : navigation.navigate('RegisterHomePage')
        }>
        {registerInProcess ? 'Verify OTP' : 'Register'}
      </Button>
    </Container>
  );
}
