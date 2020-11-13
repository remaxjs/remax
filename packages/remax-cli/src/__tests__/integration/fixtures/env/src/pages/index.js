import * as React from 'react';
import { View, Text } from '@alipay/remix';

export default () => {
  if (process.env.NODE_ENV === 'production') {
    console.log('bazinga!');
  }

  return (
    <View>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{process.env.REMIX_APP_HELLO}</Text>
      <Text>{process.env.REMIX_APP_MESSAGE}</Text>
    </View>
  );
};
