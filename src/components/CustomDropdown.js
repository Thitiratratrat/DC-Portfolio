import React from 'react';

import DropDownPicker from 'react-native-dropdown-picker';

export default function CustomDropdown({items, onChangeItem}) {
  return (
    <DropDownPicker
      items={items}
      containerStyle={{height: 40}}
      style={{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      dropDownStyle={{
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      onChangeItem={onChangeItem}
    />
  );
}
