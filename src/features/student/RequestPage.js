import React from 'react';
import {Headline} from 'react-native-paper';
import Container from '../../components/Container';
import Requestor from './components/Requestor';
import {ScrollView} from 'react-native';

export default function ViewRequests() {
  function onAccept() {}

  function onReject() {}

  return (
    <Container style={{paddingVertical: '10%', justifyContent: 'flex-start'}}>
      <Headline>View Requests</Headline>
      <ScrollView>
        <Requestor
          name={'Thitirt Siripaiboolpong'}
          position={'Head of Recruiter'}
          company={'DC company'}
          onAccept={onAccept}
          onReject={onReject}
        />
        <Requestor
          name={'Thitirt Siripaiboolpong'}
          position={'Head of Recruiter'}
          company={'DC company'}
          onAccept={onAccept}
          onReject={onReject}
        />
      </ScrollView>
    </Container>
  );
}
