import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import {Title, Button} from 'react-native-paper';
import DocumentPicker from 'react-native-document-picker';
import {useSelector} from 'react-redux';
import {instituteService} from '../../lib/dependencies';
import Files from '../../components/Files';

export default function UploadFilePage() {
  const {selectedStudent} = useSelector(state => state.view);
  const [files, setFiles] = useState([]);

  async function pickFile() {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(res.uri, res.name);

      await instituteService.uploadFile(
        selectedStudent.firstName,
        res.uri,
        res.name,
      );
      await getFiles();
    } catch (err) {}
  }

  async function getFiles() {
    const response = await instituteService.getStudentFiles(
      selectedStudent.firstName,
    );

    setFiles(response);
  }

  useEffect(() => {
    getFiles();
  }, []);

  return (
    <Container style={{justifyContent: 'flex-start'}}>
      <Title>
        {selectedStudent.firstName} {selectedStudent.lastName}
      </Title>
      <Files files={files} />
      <Button mode="contained" onPress={pickFile}>
        Upload File
      </Button>
    </Container>
  );
}
