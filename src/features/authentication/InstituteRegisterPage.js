import React, {useState} from 'react';
import Container from '../../components/Container';
import {Button, TextInput} from 'react-native-paper';
import {authenticationService} from '../../lib/dependencies';
import {useDispatch} from 'react-redux';
import actions from '../../redux/actions';
import styled from '@emotion/native';

const StyledTextInput = styled(TextInput)`
  margin-bottom: 20px;
`;

export default function InstituteRegisterPage({navigation}) {
  const dispatch = useDispatch();
  const MARGIN_BETWEEN_INPUT = 20;
  const [instituteName, setInstituteName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  async function register() {
    dispatch(
      actions.authentcationActions.startRegistering({
        registerMode: 'institute',
        instituteName,
      }),
    );

    try {
      await authenticationService.registerInstitute(
        instituteName,
        location,
        description,
        phoneNumber,
      );
    } catch (err) {
      return;
    }

    navigation.navigate('OTPVerificationPage');
  }

  return (
    <Container>
      <StyledTextInput
        label={'Institute name'}
        value={instituteName}
        onChangeText={text => setInstituteName(text)}
      />
      <StyledTextInput
        label={'Location'}
        value={location}
        onChangeText={text => setLocation(text)}
      />
      <StyledTextInput
        label={'Description'}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <StyledTextInput
        label={'Phonenumber'}
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <Button
        mode="contained"
        style={{marginTop: MARGIN_BETWEEN_INPUT}}
        onPress={register}>
        Register
      </Button>
    </Container>
  );
}
