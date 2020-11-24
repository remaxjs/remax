import * as React from 'react';
import { View, Text, navigateTo } from 'remax/one';

export default () => {
  return (
    <View id="btn" onTap={() => navigateTo({ url: '/pages/navigate/two/index' })}>
      page one
    </View>
  );
};
