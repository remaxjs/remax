import React, { useContext } from 'react';
import { View } from 'remax/ali';
import { AppContext } from '../app';

// 测试 ts 文件引用了 app 的 case

export default () => {
  const { bindStatus } = useContext(AppContext);

  return <View>{bindStatus ? 'bind' : 'unbind'}</View>;
};
