import React, {useState, useEffect} from 'react';
import SearchStudent from '../../components/SearchStudent';
import Container from '../../components/Container';
import {Provider, Portal, Button} from 'react-native-paper';
import FilterModal from './components/FilterModal';
import RequestConsentModal from './components/RequestConsentModal';
import {useDispatch, useSelector} from 'react-redux';
import {employerService} from '../../lib/dependencies';
import actions from '../../redux/actions';

export default function HomePage({navigation}) {
  const {firstName} = useSelector(state => state.user);
  const [showFilter, setShowFilter] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [age, setAge] = useState(null);
  const [gender, setGender] = useState('');
  const [selectedStudentName, setSelectedStudentName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const dispatch = useDispatch();

  async function onRequestConsent() {
    await employerService.requestConsent(selectedStudentName, firstName);

    setShowRequest(false);
  }

  async function onSelectStudent(studentName) {
    setSelectedStudentName(studentName);

    const response = await employerService.getStudentDetail(
      studentName,
      firstName,
    );

    if (!response) {
      setShowRequest(true);

      return;
    }

    dispatch(
      actions.employerActions.setStudentPortfolio(response.academicPortfolio),
    );

    navigation.navigate('StudentProfile');
  }

  function logout() {
    dispatch(actions.authentcationActions.logout());
  }

  async function onSearch() {
    const filter = {};

    if (age) {
      filter['age'] = age;
    }

    if (gender) {
      filter['gender'] = gender;
    }

    if (searchQuery) {
      filter['name'] = searchQuery;
    }

    const response = await employerService.searchStudent(filter);

    setSearchResult(response);
  }

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <Provider>
      <Portal>
        <FilterModal
          visible={showFilter}
          onDismiss={() => {
            setShowFilter(false);
          }}
          gender={gender}
          onChangeGender={gender => setGender(gender)}
          age={age}
          onChangeAge={age => setAge(age)}
        />
        <RequestConsentModal
          visible={showRequest}
          onDismiss={() => setShowRequest(false)}
          onRequestConsent={onRequestConsent}
          studentName={selectedStudentName}
        />
      </Portal>
      <Container style={{justifyContent: 'flex-start'}}>
        <SearchStudent
          onFilter={() => setShowFilter(true)}
          onSelectStudent={onSelectStudent}
          searchResult={searchResult}
          searchQuery={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSearch={onSearch}
        />
        <Button mode="contained" onPress={logout}>
          Logout
        </Button>
      </Container>
    </Provider>
  );
}
