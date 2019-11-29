import * as React from 'react';
import { View } from 'remax/alipay';
import { unstable_batchedUpdates } from 'react-dom';

unstable_batchedUpdates(() => {});

export default () => {
  return <View />;
};
