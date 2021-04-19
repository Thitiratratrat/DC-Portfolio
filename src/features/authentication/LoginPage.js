import React, {useState} from 'react';
import Container from '../../components/Container';
import {TextInput, Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import actions from '../../redux/actions';

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const dispatch = useDispatch();

  function login() {
    dispatch(actions.authentcationActions.login());
  }

  return (
    <Container>
      <TextInput
        label="Phone number"
        style={{marginBottom: 20}}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Button mode="contained" onPress={login}>
        Login
      </Button>
    </Container>
  );
}
