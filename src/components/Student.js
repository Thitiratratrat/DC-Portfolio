import React from 'react';
import {Paragraph, Divider} from 'react-native-paper';
import styled from '@emotion/native';

const Text = styled(Paragraph)`
  padding-vertical: 14px;
`;

export default function Student({children, onPress}) {
  return (
    <>
      <Text onPress={onPress}>{children}</Text>
      <Divider style={{height: 2}} />
    </>
  );
}
