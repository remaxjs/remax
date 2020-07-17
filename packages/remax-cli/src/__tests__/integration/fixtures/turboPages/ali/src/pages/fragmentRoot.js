import * as React from 'react';
import { View } from 'remax/ali';

function ReactComp() {
  return <View> ReactComp </View>;
}

export default function FragmentRoot() {
  return (
    <>
      <View>view</View>
      <ReactComp />
      {[1, 2, 3].map(() => (
        <ReactComp />
      ))}
    </>
  );
}
