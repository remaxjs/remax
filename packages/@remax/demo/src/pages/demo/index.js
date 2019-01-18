import React from 'react';
import {
  useState,
  useEffect,
} from 'react';

import Remax from '@remax/core';
import {
  View,
  Image,
} from '@remax/components';

import {
  Button,
  NavBar,
} from '@remax/weui';

import Logo from '../components/logo';


import styles from './index.module.less';

const ClickComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <View onClick={handleClick}>
      <Logo/>
      <View className={styles.info}>
        CLICK the image
        {count}
        times
      </View>
    </View>
  );
};


const Component = () => {
  const [
    isPrimary,
    setPrimary,
  ] = useState(true);

  const showToast = () => {
    setPrimary(!isPrimary);
    Remax.api.showToast({
      title: 'ok',
      icon: 'succes',
      duration: 1000,
      mask: true,
    });
  };

  return (
    <View>
      <View className={styles.title}>
        {'<ClickComponent />'}
with useState & CSS Module
      </View>
      <ClickComponent />
      <Button className={styles.btn} type={isPrimary ? 'primary': 'normal'} onClick={showToast}>
      点击
      </Button>

    </View>
  );
};

Remax.render(<Component />);

