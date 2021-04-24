import React from 'react';
import {Modal, Text, RadioButton, TextInput} from 'react-native-paper';
import styled from '@emotion/native';

const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default function FilerModal({
  visible,
  onDismiss,
  gender,
  onChangeGender,
  age,
  onChangeAge,
}) {
  const MARGIN_BETWEEN_INPUT = 20;

  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={{
        backgroundColor: 'white',
        marginHorizontal: 30,
        padding: 40,
      }}>
      <Text style={{marginVertical: MARGIN_BETWEEN_INPUT}}>Gender</Text>
      <HorizontalContainer>
        <RadioButton
          status={gender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => {
            gender === 'female' ? onChangeGender('') : onChangeGender('female');
          }}
        />
        <Text>Female</Text>
      </HorizontalContainer>
      <HorizontalContainer style={{marginBottom: MARGIN_BETWEEN_INPUT}}>
        <RadioButton
          status={gender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => {
            gender === 'male' ? onChangeGender('') : onChangeGender('male');
          }}
        />
        <Text>Male</Text>
      </HorizontalContainer>
      <TextInput label={'Age'} value={age} onChangeText={onChangeAge} />
    </Modal>
  );
}
