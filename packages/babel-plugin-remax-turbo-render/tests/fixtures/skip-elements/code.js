import { View, PickerView, PickerViewColumn } from 'components';

const node = (
  <PickerViewColumn>
    {[1].map(i => (
      <View>{i}</View>
    ))}
  </PickerViewColumn>
);

<PickerView>{node}</PickerView>;
