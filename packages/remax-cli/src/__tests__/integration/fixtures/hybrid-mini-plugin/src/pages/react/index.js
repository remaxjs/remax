import * as React from 'react';
import { View } from 'remax';
import MiniGreet from '../../components/mini-greet';
import ReactGreet from '../../components/react-greet';

export default () => {
  return (
    <View>
      <MiniGreet />
      <ReactGreet />
    </View>
  );
};
