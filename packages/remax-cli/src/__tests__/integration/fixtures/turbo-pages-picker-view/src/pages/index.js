import React from 'react';
import { View, PickerView, PickerViewColumn } from 'remax';

export default props => {
  const columns = [
    [
      {
        label: '1.1',
      },
      {
        label: '1.2',
      },
    ],
    [
      {
        label: '2.1',
      },
      {
        label: '2.2',
      },
    ],
  ];

  return (
    <View>
      <PickerView>
        {columns.map((colum, idx) => (
          <PickerViewColumn key={idx}>
            {colum.map((item, index) => (
              <View key={index}>{item.label}</View>
            ))}
          </PickerViewColumn>
        ))}
      </PickerView>
    </View>
  );
};
