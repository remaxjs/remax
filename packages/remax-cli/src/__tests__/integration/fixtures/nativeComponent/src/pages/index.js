import * as React from 'react';
import { requirePluginComponent } from '@remax/macro';
import { View } from 'remax';
import A from '../components/a';
import B from '@/components/b';
import C from '../components/c/index';
import D from '@c/d/index.js';
import E from '@components/e/index.js';
import Complex from '../components/complex';
import SlotComponent from '../components/slot';
import ScopedComponent from '../components/@foo/a';
import SrcComponent from '../components/src';
import NotInJSXComponent from '../components/notInJSX';
import CJSComponent from 'commonjs';

const PluginComponent = requirePluginComponent('plugin://myPlugin/xx');
const PluginComponent2 = requirePluginComponent('plugin://myPlugin/dddd');

export default () => {
  const b = React.createRef();
  const text = 'not in jsx' + NotInJSXComponent;
  return (
    <View>
      <A foo="bar" />
      <B ref={b} />
      <C />
      <D />
      <E />
      <Complex />
      <PluginComponent foo="bar" />
      <PluginComponent2 />
      <SlotComponent>
        {/* 测试 slot view 的 prop 收集 */}
        <View id="inner" slot="inner"></View>
      </SlotComponent>
      <SlotComponent>
        {/* 测试 slot view 的 prop 收集 */}
        <View className="outer" slot="outer" ns:attr="value" />
      </SlotComponent>
      <ScopedComponent />
      <SrcComponent />
      <CJSComponent />
      {text}
    </View>
  );
};
