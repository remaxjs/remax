import { View, PickerView, PickerViewColumn } from 'components';
const node = (
  <PickerViewColumn>
    {[1].map(i => (
      <View>
        <block>{i}</block>
      </View>
    ))}
  </PickerViewColumn>
);
<PickerView>{node}</PickerView>;
