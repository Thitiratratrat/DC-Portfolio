import React from 'react';
import {Dialog, Button, TextInput} from 'react-native-paper';

export default function EditDialog({
  visible,
  onDismiss,
  title,
  content,
  onChange,
  isDropdown,
  save,
}) {
  return (
    <Dialog
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={{backgroundColor: 'white'}}>
      <Dialog.Title>Edit {title}</Dialog.Title>
      <Dialog.Content>
        {!isDropdown && (
          <TextInput multiline={true} value={content} onChangeText={onChange} />
        )}
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={save}>Save</Button>
      </Dialog.Actions>
    </Dialog>
  );
}
