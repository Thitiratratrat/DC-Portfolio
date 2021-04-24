import React, {useEffect, useState} from 'react';
import {Headline} from 'react-native-paper';
import Container from '../../components/Container';
import Requestor from './components/Requestor';
import {ScrollView} from 'react-native';
import {studentService} from '../../lib/dependencies';
import {useSelector} from 'react-redux';

export default function ViewRequests() {
  const {firstName} = useSelector(state => state.user);
  const [requestList, setRequestList] = useState([]);

  async function onAccept(employerName) {
    try {
      await studentService.approveRequest(firstName, employerName);

      filterRequestList(employerName);
    } catch (err) {
      return;
    }
  }

  function filterRequestList(employerName) {
    const filteredRequestList = requestList.filter(
      request => request.firstName != employerName,
    );

    setRequestList(filteredRequestList);
  }

  async function onReject(employerName) {
    try {
      await studentService.rejectRequest(firstName, employerName);

      filterRequestList(employerName);
    } catch (err) {
      return;
    }
  }

  async function getRequestList() {
    const requests = await studentService.getRequestList(firstName);

    setRequestList(requests);
  }

  useEffect(() => {
    getRequestList();
  }, []);

  return (
    <Container style={{justifyContent: 'flex-start'}}>
      <Headline>View Requests</Headline>
      <ScrollView>
        {requestList.map((requestor, index) => (
          <Requestor
            key={index}
            firstName={requestor.firstName}
            lastName={requestor.lastName}
            position={requestor.position}
            company={requestor.company}
            onAccept={onAccept}
            onReject={onReject}
          />
        ))}
      </ScrollView>
    </Container>
  );
}
