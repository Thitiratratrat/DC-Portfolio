import React, {useState} from 'react';
import Section from './components/Section';
import {ScrollView} from 'react-native';
import Container from '../../components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import EditDialog from './components/EditDialog';
import {Button, Provider, Portal} from 'react-native-paper';

export default function HomePage({navigation}) {
  const [showModal, setShowModal] = useState(false);
  const [editingTitle, setEditingTitle] = useState('');

  function onEdit(title) {
    setEditingTitle(title);
    setShowModal(true);
  }

  function save() {
    setShowModal(false);
  }

  return (
    <Provider>
      <Portal>
        <EditDialog
          visible={showModal}
          onDismiss={() => setShowModal(false)}
          title={editingTitle}
          save={save}
        />
      </Portal>
      <ScrollView>
        <Container style={{paddingVertical: '10%'}}>
          <Icon
            style={{textAlign: 'right'}}
            name="notifications"
            size={30}
            color={'#fdbc2e'}
            onPress={() => navigation.navigate('Request')}
          />
          <Section title={'Firstname'} onEdit={() => onEdit('Firstname')} />
          <Section title={'Lastname'} onEdit={() => onEdit('Lastname')} />
          <Section
            title={'Purpose'}
            body={'at least graduate'}
            onEdit={() => onEdit('Purpose')}
          />
          <Section title={'Acitvity'} onEdit={() => onEdit('Activity')} />
          <Section title={'Experience'} onEdit={() => onEdit('Experience')} />
          <Section title={'Education'} onEdit={() => onEdit('Education')} />
          <Section title={'Skills'} onEdit={() => onEdit('Skills')} />
          <Section title={'Awards'} onEdit={() => onEdit('Awards')} />
          <Section title={'Projects'} onEdit={() => onEdit('Projects')} />
          <Section title={'Academic Record'} />
          <Button mode="contained" style={{marginTop: 40}}>
            Export academic portfolio
          </Button>
        </Container>
      </ScrollView>
    </Provider>
  );
}
