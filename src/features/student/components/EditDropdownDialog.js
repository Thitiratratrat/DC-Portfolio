import React from 'react';
import {Dialog} from 'react-native-paper';
import CustomDropdown from '../../../components/CustomDropdown';

export default function EditDropdownDialog({
  visible,
  onDismiss,
  title,
  items,
  onChangeItem,
}) {
  return (
    <Dialog
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={{backgroundColor: 'white'}}
      style={{paddingBottom: '40%'}}>
      <Dialog.Title>Edit {title}</Dialog.Title>
      <Dialog.Content>
        <CustomDropdown items={items} onChangeItem={onChangeItem} />
      </Dialog.Content>
    </Dialog>
  );
}
