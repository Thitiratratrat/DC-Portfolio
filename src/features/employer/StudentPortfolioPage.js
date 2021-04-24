import React, {useState, useEffect} from 'react';
import Section from '../student/components/Section';
import Container from '../../components/Container';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {instituteService} from '../../lib/dependencies';

export default function StudentPortfolioPage() {
  const {studentPortfolio} = useSelector(state => state.employer);
  const [files, setFiles] = useState([]);

  async function getFiles() {
    const response = await instituteService.getStudentFiles(
      studentPortfolio.firstName,
    );

    setFiles(response);
  }

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <ScrollView>
      <Container>
        <Section title={'Firstname'} body={studentPortfolio.firstName} />
        <Section title={'Lastname'} body={studentPortfolio.lastName} />
        <Section title={'Purpose'} body={studentPortfolio.purpose} />
        <Section title={'Activity'} body={studentPortfolio.activity} />
        <Section title={'Experience'} body={studentPortfolio.experience} />
        <Section title={'Education'} body={studentPortfolio.education} />
        <Section title={'Skills'} body={studentPortfolio.skills} />
        <Section title={'Awards'} body={studentPortfolio.awards} />
        <Section title={'Projects'} body={studentPortfolio.projects} />
        <Section title={'Academic Record'} files={files} />
      </Container>
    </ScrollView>
  );
}
