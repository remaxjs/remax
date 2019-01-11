import React from 'react';
import Remax from '@remax/core';

import {
  List,
} from '@remax/weui';

import Logo from '../components/logo';

const Component = () => <>
  <Logo />
  <List title="组件" text="tabbar" url="weui-tabbar"></List>
  <List text="button" url="weui-button"></List>
  <List title="完整示例" text="react" url="demo"></List>

</>;

Remax.render(<Component />);
