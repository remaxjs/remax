import { View } from 'components';

const data = [];
const node = <View />;
<View>
  {data.map(i => (
    <View>{i}</View>
  ))}

  {node}

  <View />
</View>;
