import React, {useState} from 'react';
import Container from '../../components/Container';
import {useDispatch} from 'react-redux';
import actions from '../../redux/actions';
import {Button, TextInput, RadioButton, Text} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {authenticationService} from '../../lib/dependencies';
import styled from '@emotion/native';

const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledTextInput = styled(TextInput)`
  margin-bottom: 20px;
`;

export default function StudentRegisterPage({navigation}) {
  const dispatch = useDispatch();
  const MARGIN_BETWEEN_INPUT = 20;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('female');
  const [birthday, setBirthday] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  async function register() {
    dispatch(
      actions.authentcationActions.startRegistering({
        registerMode: 'student',
        studentFirstname: firstname,
      }),
    );

    try {
      await authenticationService.registerStudent(
        firstname,
        lastname,
        gender,
        birthday,
        phoneNumber,
      );
    } catch (err) {
      return;
    }

    navigation.navigate('OTPVerificationPage');
  }

  function formatBirthday() {
    if (!birthday) {
      return '';
    }

    const month = birthday.getUTCMonth() + 1;
    const day = birthday.getUTCDate();
    const year = birthday.getUTCFullYear();

    return day + '/' + month + '/' + year;
  }

  return (
    <Container>
      <StyledTextInput
        label={'Firstname'}
        value={firstname}
        onChangeText={text => setFirstname(text)}
      />
      <StyledTextInput
        label={'Lastname'}
        value={lastname}
        onChangeText={text => setLastname(text)}
      />
      <Text style={{marginBottom: MARGIN_BETWEEN_INPUT}}>Gender</Text>
      <HorizontalContainer>
        <RadioButton
          value="female"
          status={gender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setGender('female')}
        />
        <Text>Female</Text>
      </HorizontalContainer>
      <HorizontalContainer style={{marginBottom: MARGIN_BETWEEN_INPUT}}>
        <RadioButton
          value="male"
          status={gender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setGender('male')}
        />
        <Text>Male</Text>
      </HorizontalContainer>
      <HorizontalContainer>
        <StyledTextInput
          label={'Birthday'}
          disabled={true}
          value={formatBirthday()}
          style={{width: '44%'}}
        />
        <Button onPress={() => setShowDatePicker(true)}>Select Birthday</Button>
      </HorizontalContainer>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={date => {
          setBirthday(date);
          setShowDatePicker(false);
        }}
        onCancel={() => setShowDatePicker(false)}
      />
      <StyledTextInput
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        label={'Phone number'}
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
