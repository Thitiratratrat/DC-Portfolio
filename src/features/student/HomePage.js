import React, {useState, useEffect} from 'react';
import Section from './components/Section';
import {ScrollView} from 'react-native';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import EditDialog from './components/EditDialog';
import EditDropdownDialog from './components/EditDropdownDialog';
import {Button, Provider, Portal} from 'react-native-paper';
import RNFetchBlob from 'react-native-fetch-blob';
import {useSelector, useDispatch} from 'react-redux';
import {studentService, instituteService} from '../../lib/dependencies';
import actions from '../../redux/actions';

export default function HomePage({navigation}) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.student);
  const {firstName} = useSelector(state => state.user);
  const [academicPortfolio, setAcademicPortfolio] = useState({
    purpose: profile.purpose,
    activity: profile.activity,
    experience: profile.experience,
    education: profile.education,
    skills: profile.skills,
    awards: profile.awards,
    projects: profile.projects,
    firstName: profile.firstName,
    lastName: profile.lastName,
  });
  const [showModal, setShowModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [editingTitle, setEditingTitle] = useState('');
  const [academicRecord, setAcademicRecord] = useState([]);
  const [key, setKey] = useState('');
  const [content, setContent] = useState('');
  const [institutes, setInstitutes] = useState([]);

  function onEdit(title, newKey) {
    setKey(newKey);
    setContent(academicPortfolio[newKey]);
    setEditingTitle(title);
    setShowModal(true);
  }

  function onEditEducation() {
    setEditingTitle('Education');
    setKey('education');
    setShowEducationModal(true);
  }

  function editPortfolio(text) {
    setAcademicPortfolio({...academicPortfolio, [key]: text});
  }

  function downloadAcademicRecord() {
    const {dirs} = RNFetchBlob.fs;
    const BASE_URL =
      'https://ifap-export-to-pdf-qoicwzb3ma-as.a.run.app/export';
    const exportLink = `${BASE_URL}?purpose=${academicPortfolio.purpose}&activity=${academicPortfolio.activity}&experience=${academicPortfolio.experience}&education=${academicPortfolio.education}&skills=${academicPortfolio.skills}&awards=${academicPortfolio.awards}&projects=${academicPortfolio.projects}&firstName=${academicPortfolio.firstName}&lastName=${academicPortfolio.lastName}`;

    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `academic-portfolio.pdf`,
        path: `${dirs.DownloadDir}/academic-portfolio.pdf`,
      },
    })
      .fetch('GET', exportLink)
      .then(res => {
        console.log('The file saved to ', res.path());
      })
      .catch(e => {
        console.log(e);
      });
  }

  async function getAcademicPortfolio() {
    const response = await studentService.getAcademicPortfolio(firstName);

    if (!response) {
      setAcademicPortfolio(profile);

      return;
    }

    setAcademicPortfolio(response);

    dispatch(actions.studentActions.setAcademicPortfolio(response));
  }

  async function saveAcademicPortfolio() {
    try {
      await studentService.saveAcademicPortfolio(academicPortfolio);

      dispatch(actions.studentActions.setAcademicPortfolio(academicPortfolio));
    } catch (err) {
      return;
    }
  }

  async function getInstitutes() {
    const institutes = await studentService.getInstitutes();

    const mappedInstitutes = institutes.map(institute => ({
      label: institute,
      value: institute,
    }));

    setInstitutes(mappedInstitutes);
  }

  async function getAcademicRecord() {
    const response = await instituteService.getStudentFiles(firstName);

    setAcademicRecord(response);
  }

  async function logout() {
    dispatch(actions.authentcationActions.logout());
  }

  useEffect(() => {
    async function initialize() {
      await getAcademicPortfolio();
      await getInstitutes();
      await getAcademicRecord();
      await downloadAcademicRecord();
    }

    initialize();
  }, []);

  return (
    <Provider>
      <Portal>
        <EditDialog
          visible={showModal}
          onDismiss={() => setShowModal(false)}
          title={editingTitle}
          onChange={editPortfolio}
          content={content}
        />
        <EditDropdownDialog
          visible={showEducationModal}
          onDismiss={() => setShowEducationModal(false)}
          title={editingTitle}
          items={institutes}
          onChangeItem={item => editPortfolio(item.value)}
        />
      </Portal>
      <ScrollView>
        <Container>
          <Icon
            style={{textAlign: 'right'}}
            name="notifications"
            size={30}
            color={'#fdbc2e'}
            onPress={() => navigation.navigate('Request')}
          />
          <Section title={'Firstname'} body={academicPortfolio.firstName} />
          <Section title={'Lastname'} body={academicPortfolio.lastName} />
          <Section
            title={'Purpose'}
            body={academicPortfolio.purpose}
            onEdit={() => onEdit('Purpose', 'purpose')}
          />
          <Section
            title={'Activity'}
            onEdit={() => {
              onEdit('Activity', 'activity');
            }}
            body={academicPortfolio.activity}
          />
          <Section
            title={'Experience'}
            onEdit={() => onEdit('Experience', 'experience')}
            body={academicPortfolio.experience}
          />
          <Section
            title={'Education'}
            onEdit={onEditEducation}
            body={academicPortfolio.education}
          />
          <Section
            title={'Skills'}
            onEdit={() => onEdit('Skills', 'skills')}
            body={academicPortfolio.skills}
          />
          <Section
            title={'Awards'}
            onEdit={() => onEdit('Awards', 'awards')}
            body={academicPortfolio.awards}
          />
          <Section
            title={'Projects'}
            onEdit={() => onEdit('Projects', 'projects')}
            body={academicPortfolio.projects}
          />
          <Section title={'Academic Record'} files={academicRecord} body={''} />
          <Button
            mode="contained"
            style={{marginTop: 60}}
            onPress={saveAcademicPortfolio}>
            Save Changes
          </Button>
          <Button
            mode="contained"
            style={{marginTop: 40}}
            onPress={downloadAcademicRecord}>
            Export Academic Portfolio
          </Button>
          <Button mode="contained" style={{marginTop: 40}} onPress={logout}>
            Logout
          </Button>
        </Container>
      </ScrollView>
    </Provider>
  );
}
