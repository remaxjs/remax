import * as React from 'react';
import { View } from 'remax/ali';

function ReactComp({ text }) {
  return <View>ReactComp{text}</View>;
}

export default function FragmentRoot() {
  return (
    <>
      <View>view</View>
      <ReactComp text={0} />
      {[1, 2, 3].map(i => (
        <ReactComp key={i} text={i} />
      ))}
    </>
  );
}
