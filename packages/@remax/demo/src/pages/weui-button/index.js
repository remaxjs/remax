import React from 'react';
import Remax from '@remax/core';
import {
  useState,
  useEffect,
} from 'react';
import {
  Button,
} from '@remax/weui';
import {
  View,
} from '@remax/components';
import styles from './index.module.less';

const Page = () => {
  return <View className={styles.button}>
    <Button className={styles.button} type="primary">
    主按钮
    </Button>
    <Button className={styles.button} >
    普通按钮
    </Button>

    <Button className={styles.button} loading>
    加载中
    </Button>
  </View>;
};

Remax.render(<Page />);