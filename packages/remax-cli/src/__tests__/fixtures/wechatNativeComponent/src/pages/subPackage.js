import * as React from 'react';
import { View } from 'remax/wechat';
import PluginComponent from 'plugin://subPlugin/xx';
import PluginComponent2 from 'plugin://subPlugin/dddd';

export default () => (
  <View>
    <PluginComponent />
    <PluginComponent2 />
  </View>
);
