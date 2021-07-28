import * as React from 'react';
import { View } from 'remax/one';

console.log('greeting1');
export default ({ name }) => {
  return (
    <View id="greeting">
      <View>Hello {name}</View>
    </View>
  );
};
