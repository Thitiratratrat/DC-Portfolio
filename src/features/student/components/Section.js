import React from 'react';
import {Title, Paragraph, Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from '@emotion/native';

const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Container = styled.View`
  margin-vertical: 20px;
`;

export default function Section({title, body, onEdit}) {
  return (
    <>
      <Container>
        <Header>
          <Title>{title}</Title>
          {onEdit && (
            <Icon
              name="edit"
              size={25}
              color={'#4580ad'}
              style={{marginLeft: 10}}
              onPress={onEdit}
            />
          )}
        </Header>
        <Paragraph style={{marginTop: 10}}>{body}</Paragraph>
      </Container>
      <Divider style={{height: 2}} />
    </>
  );
}
