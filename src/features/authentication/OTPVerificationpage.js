import React, {useState} from 'react';
import Container from '../../components/Container';
import {Button, TextInput} from 'react-native-paper';

export default function OTPVerificationPage({navigation}) {
  const [code, setCode] = useState('');

  function verifyOTP() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <TextInput
        label="OTP Code"
        style={{marginBottom: 20}}
        value={code}
        onChangeText={text => setCode(text)}
      />
      <Button mode="contained" onPress={verifyOTP}>
        Verify
      </Button>
    </Container>
  );
}
