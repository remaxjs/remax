import { View } from 'components';
const data = [];
const node = <View />;
<View>
  <block>
    {data.map(i => (
      <View>
        <block>{i}</block>
      </View>
    ))}
  </block>

  <block>{node}</block>

  <View />
</View>;
