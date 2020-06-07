import * as React from 'react';
import { View } from '@alipay/remix/ali';
import { A } from './circularDependency1';
import { C } from './circularDependency2';

export default () => {
  return (
    <View>
      {A}
      {C}
    </View>
  );
};
