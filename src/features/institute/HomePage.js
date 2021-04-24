import React, {useState, useEffect} from 'react';
import SearchStudent from '../../components/SearchStudent';
import Container from '../../components/Container';
import {useDispatch, useSelector} from 'react-redux';
import actions from '../../redux/actions';
import {Button} from 'react-native-paper';
import {instituteService} from '../../lib/dependencies';

export default function HomePage({navigation}) {
  const {instituteName} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  function onSelectStudent(firstName, lastName) {
    dispatch(actions.viewActions.selectStudent({firstName, lastName}));

    navigation.navigate('UploadFile');
  }

  async function getStudents() {
    const queryParams = {instituteName};

    if (searchQuery) {
      queryParams['studentFirstName'] = searchQuery;
    }

    const response = await instituteService.searchStudents(queryParams);

    setSearchResult(response);
  }

  async function logout() {
    dispatch(actions.authentcationActions.logout());
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <Container>
      <SearchStudent
        searchResult={searchResult}
        onSelectStudent={onSelectStudent}
        searchQuery={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        onSearch={getStudents}
      />
      <Button mode="contained" onPress={logout}>
        Logout
      </Button>
    </Container>
  );
}
