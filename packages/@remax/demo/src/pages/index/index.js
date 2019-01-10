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


import styles from './index.module.less';

const ClickComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 222);
  };

  return (
    <View onClick={handleClick}>
      <Image className={styles.image} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
    CLICK the image
      {count}
    times
    </View>
  );
};


const Component = () => {
  const [
    loading,
    setLoading,
  ] = useState(false);

  const showToast = () => {
    setLoading(!loading);
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
      <Button size="mini" loading={loading} className={styles.btn} type="primary" onClick={showToast}>
      点击
      </Button>

    </View>
  );
};

Remax.render(<Component />);