import * as React from 'react';
import { Text, View } from 'remax/x';

export default () => (
  <View style={{ marginLeft: 30, height: 100, width: 200, flexDirection: 'row', backgroundColor: 'green' }}>
    <View style={{ width: 100, height: 50, backgroundColor: 'red' }}>
      <Text style={{ fontSize: 20, backgroundColor: 'yellow' }}>1</Text>
    </View>
    <View style={{ marginLeft: 20, width: 100, height: 50, backgroundColor: 'blue' }}>
      <Text style={{ fontSize: 20, backgroundColor: 'yellow' }}>2</Text>
    </View>
  </View>
);
