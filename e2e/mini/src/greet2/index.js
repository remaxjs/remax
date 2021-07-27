import * as React from 'react';
import { View } from 'remax/one';
import Badge from 'mini-antui/es/badge';

console.log('greeting2');
export default ({ name }) => {
  return (
    <View id="greeting">
      <View>Hello {name}</View>
      <Badge>
        <View slot="inner">Remax</View>
      </Badge>
    </View>
  );
};
