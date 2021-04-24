import React, {useState} from 'react';
import Container from '../../components/Container';
import {Button, TextInput} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {authenticationService} from '../../lib/dependencies';
import actions from '../../redux/actions';

export default function OTPVerificationPage({navigation}) {
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const {
    registerMode,
    studentFirstname,
    instituteName,
    employerName,
  } = useSelector(state => state.authentication);
  const VERIFY_MODE = {
    student: verifyStudent,
    institute: verifyInstitute,
    employer: verifyEmployer,
  };

  async function verifyOTP() {
    try {
      await VERIFY_MODE[registerMode]();
    } catch (err) {
      return;
    }

    dispatch(actions.authentcationActions.finishedRegistering());

    navigation.navigate('Home');
  }

  async function verifyStudent() {
    await authenticationService.verifyStudent(code, studentFirstname);
  }

  async function verifyInstitute() {
    await authenticationService.verifyInstitute(code, instituteName);
  }

  async function verifyEmployer() {
    await authenticationService.verifyEmployer(code, employerName);
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
