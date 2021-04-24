import React from 'react';
import {Title, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from '@emotion/native';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Description = styled.View`
  flex-direction: column;
  margin-vertical: 5%;
`;

export default function Requestor({
  firstName,
  lastName,
  position,
  company,
  onAccept,
  onReject,
}) {
  return (
    <Description>
      <Container>
        <Title style={{maxWidth: '76%'}}>
          {firstName} {lastName}
        </Title>
        <Icon
          name="checkmark-circle"
          color={'#2dcb70'}
          size={35}
          style={{marginLeft: 8}}
          onPress={() => onAccept(firstName)}
        />
        <Icon
          name="close-circle"
          color={'#ff4141'}
          size={35}
          style={{marginLeft: 6}}
          onPress={() => onReject(firstName)}
        />
      </Container>
      <Paragraph>
        {position} at {company}
      </Paragraph>
    </Description>
  );
}
