import * as React from 'react';
import { View, Text } from 'remax/alipay';

export default () => {
  const { REMAX_APP_HELLO } = process.env;

  if (process.env.NODE_ENV === 'production') {
    console.log('bazinga!');
  }

  return (
    <View>
      <Text>{process.env.NODE_ENV}</Text>
      <Text>{REMAX_APP_HELLO}</Text>
      <Text>{process.env.REMAX_APP_MESSAGE}</Text>
    </View>
  );
};
