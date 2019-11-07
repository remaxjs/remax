import * as React from 'react';
import { View } from 'remax/alipay';
import A from '../components/a';
import B from '@/components/b';
import C from '../components/c/index';
import D from '@c/d/index.js';
import E from '@components/e/index.js';
import Complex from '../components/complex';
import PluginComponent from 'plugin://myPlugin/xx';
import PluginComponent2 from 'plugin://myPlugin/dddd';

export default () => (
  <View>
    <A />
    <B />
    <C />
    <D />
    <E />
    <Complex />
    <PluginComponent />
    <PluginComponent2 />
  </View>
);
