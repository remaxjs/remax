import * as React from 'react';
import { View } from '@remax/components';
import styles from './index.module.less';

export default () => {
  const [text] = React.useState('Hello world');
  return <View className={styles.text}>{text}</View>;
};
