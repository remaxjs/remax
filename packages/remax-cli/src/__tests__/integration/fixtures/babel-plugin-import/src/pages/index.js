import * as React from 'react';
import { View } from '@alipay/remix';
import { useRefState } from 'parsec-hooks';

export default () => {
  console.log(useRefState);
  return <View>hello</View>;
};
