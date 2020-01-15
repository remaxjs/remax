import * as React from 'react';
import { View } from 'remax/toutiao';
import A from '../components/a';
import B from '@/components/b';
import C from '../components/c/index';
import D from '@c/d/index.js';
import E from '@components/e/index.js';
import Complex from '../components/complex';
import PluginComponent from 'plugin://myPlugin/xx';
import PluginComponent2 from 'plugin://myPlugin/dddd';
import SlotComponent from '../components/slot';
import ScopedComponent from '../components/@foo/a';
import SrcComponent from '../components/src';
import NotInJSXComponent from '../components/notInJSX';
import CJSComponent from '../components/CJS';

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
      <PluginComponent />
      <PluginComponent2 />
      <SlotComponent>
        <View slot="inner"></View>
      </SlotComponent>
      <ScopedComponent />
      <SrcComponent />
      <CJSComponent />
      {text}
    </View>
  );
};
