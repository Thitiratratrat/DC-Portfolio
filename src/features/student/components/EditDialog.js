import React, {useState, useEffect} from 'react';
import {Dialog, TextInput, Button} from 'react-native-paper';

export default function EditDialog({
  visible,
  onDismiss,
  title,
  content,
  onChange,
}) {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(content);
  }, [content]);

  return (
    <Dialog
      visible={visible}
      onDismiss={() => {
        setText('');
        onDismiss();
      }}
      contentContainerStyle={{backgroundColor: 'white'}}
      key={content}>
      <Dialog.Title>Edit {title}</Dialog.Title>
      <Dialog.Content>
        <TextInput
          multiline={true}
          value={text}
          onChangeText={text => setText(text)}
        />
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          onPress={() => {
            onChange(text);
            setText('');
          }}>
          Save
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}
