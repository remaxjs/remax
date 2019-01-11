import React from 'react';
import Remax from '@remax/core';

import {
  List,
  Button,
} from '@remax/weui';

import {
  View,
} from '@remax/components';

import styles from './index.module.less';

import Logo from '../components/logo';

const Component = () => <>
  <Logo />
  <List title="组件" text="tabbar" url="weui-tabbar"></List>
  <List text="button" url="weui-button"></List>
  <List title="完整示例" text="react" url="demo"></List>
  <View className={styles.btn}>
    <Button openType="share" type="primary">分享</Button>
  </View>
</>;

Remax.render(<Component />);
