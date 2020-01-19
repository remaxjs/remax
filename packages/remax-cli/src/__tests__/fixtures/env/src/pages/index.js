import * as React from 'react';
import { View, Text } from 'remax/alipay';

export default () => {
  const { REMAX_APP_HELLO } = process.env;

  return (
    <View>
      <Text>{REMAX_APP_HELLO}</Text>
      <Text>{process.env.REMAX_APP_MESSAGE}</Text>
    </View>
  );
};
