import React from 'react';
import {Title, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Student from './Student';
import styled from '@emotion/native';
import {ScrollView} from 'react-native';

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export default function SearchStudent({
  searchQuery,
  onChangeText,
  onSearch,
  onSelectStudent,
  searchResult,
  onFilter,
}) {
  return (
    <>
      <Header>
        <Title style={{marginRight: 10}}>Students</Title>
        {onFilter && (
          <Icon name="filter" size={25} color={'#4580ad'} onPress={onFilter} />
        )}
      </Header>
      <Searchbar
        style={{borderRadius: 24, marginBottom: 20}}
        value={searchQuery}
        onChangeText={onChangeText}
        placeholder={'Student name'}
        onIconPress={onSearch}
      />
      <ScrollView style={{paddingHorizontal: 10}}>
        {searchResult.map((student, index) => (
          <Student
            key={index}
            onPress={() =>
              onSelectStudent(student.firstName, student.lastName)
            }>
            {student.firstName} {student.lastName}
          </Student>
        ))}
      </ScrollView>
    </>
  );
}
