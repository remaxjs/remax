import * as React from 'react';
import { View } from 'remax/ali';
import ModuleA from './ModuleA';

// 测试引入的其他模块中使用原生组件的情形

export default () => (
  <View>
    <ModuleA />
  </View>
);
