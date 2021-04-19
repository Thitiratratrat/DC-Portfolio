import React, {useState} from 'react';
import Container from '../../components/Container';
import {TextInput, Button} from 'react-native-paper';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <Container>
      <TextInput
        label="Phone number"
        style={{marginBottom: 20}}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Button mode="contained">Login</Button>
    </Container>
  );
}
