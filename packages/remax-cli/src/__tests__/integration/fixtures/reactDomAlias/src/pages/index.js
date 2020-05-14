import * as React from 'react';
import { View } from 'remax/ali';
import { unstable_batchedUpdates } from 'react-dom';

unstable_batchedUpdates(() => {});

export default () => {
  return <View />;
};
