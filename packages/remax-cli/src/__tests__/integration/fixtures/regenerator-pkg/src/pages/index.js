import React from 'react';
import { View, Text } from 'remax';
import { index } from 'foo';
import { index2, foo } from 'foo/index2';

async function run() {
  await index();
  await index2();
  return foo;
}

export default () => {
  React.useState(() => {
    run().catch(() => {});
  }, []);

  return (
    <View>
      <Text>hello</Text>
      <View data-aspm-expo="d1234">foo</View>
      <View data-aspm-click="d5678">bar</View>
    </View>
  );
};
