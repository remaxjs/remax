import * as React from 'react';
import { View } from '@alipay/remix';
import styles from './index.css';

function timesTwo(arr) {
  return arr.map(n => n * 2);
}

export default () => {
  console.log(timesTwo([1, 2, 3]));

  return <View className={styles.text}>hello</View>;
};
