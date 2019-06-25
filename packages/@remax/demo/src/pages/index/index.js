import * as React from 'react';
import { View } from '@remax/components';
import styles from './index.module.less';

export default () => {
  const [count, setCount] = React.useState(0);
  return (
    <View className={styles.text} onClick={() => setCount(count + 1)}>
      {count}
    </View>
  );
};
