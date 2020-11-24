import * as React from 'react';
import { View, Text } from 'remax';

export default () => {
  const [showB, setB] = React.useState(false);
  const [showB2, setB2] = React.useState(false);

  const toggleB = () => setB(!showB);
  const toggleB2 = () => setB2(!showB2);

  return (
    <View className="page">
      <View id="toggle-b" onClick={toggleB}>
        toggle b
      </View>
      <View id="toggle-b2" onClick={toggleB2}>
        toggle b2
      </View>
      insert before case 1
      <View>
        <Text id="a">a</Text>
        {showB && <Text id="b">b</Text>}
        <Text id="c">c</Text>
      </View>
      insert before case 2
      <View>
        {showB2 && <Text id="b2">b2</Text>}
        <Text id="c2">c2</Text>
      </View>
    </View>
  );
};
