import React from 'react';
import { View, Text } from '@alipay/remix';

export default props => (
  <View>
    <Text>hello</Text>
    <View data-aspm-expo="d1234">foo</View>
    <View data-aspm-click="d5678">bar</View>
    <View data-aspm-click={props.spmD}>alice</View>
  </View>
);
