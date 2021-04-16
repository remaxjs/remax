import * as React from 'react';
import { View, Text } from 'remax';
import C from '@/components/C';
// 测试引用 json 模块
import dataJson from './data.json';
import styles from './index.module.css';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    await Promise.resolve(1);
  }

  function handleTouchStart() {}
  const value = 0 ?? 1;

  return (
    <View className={styles['page-index']}>
      <C className="b" />
      <View
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        id="view"
        unrecognized-props=""
        data-foo="bar"
        key="my-view"
        {...props}
      >
        foo
        {dataJson?.data}
        {value}
      </View>
      {TextElement}
    </View>
  );
};
