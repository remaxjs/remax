import * as React from 'react';
import { Button } from '@remax/components'
import styles from './index.module.less';

export default () => {
  const [count, setCount] = React.useState(0);
  return (
    <Button key="1" className={styles.btn} type="primary" onClick={() => setCount(count + 1)}>
      {count}
    </Button>
  );
};
