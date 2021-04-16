import * as React from 'react';
import { View } from 'remax/one';
import A from '../../components/a';
import B from '@/components/b';
import C from '../../components/c/index';
import D from '@/components/d/index.js';
import E from '@/components/e/index.js';
import Complex from '../../components/complex';
import SlotComponent from '../../components/slot';
import ScopedComponent from '../../components/@foo/a';
import SrcComponent from '../../components/src';
import NotInJSXComponent from '../../components/notInJSX';
import RaxView from 'rax-view';
import Badge from 'mini-antui/es/badge';

export default () => {
  const b = React.createRef();
  const text = 'not in jsx' + NotInJSXComponent;
  return (
    <View>
      <A foo="bar" className="a-class" />
      <B ref={b} />
      <C />
      <D />
      <E />
      <Complex />
      <SlotComponent>
        <View id="inner" slot="inner">
          inner
        </View>
      </SlotComponent>
      <ScopedComponent />
      <SrcComponent />
      <RaxView />
      {text}
      <Badge>
        <View slot="inner">Remax</View>
      </Badge>
    </View>
  );
};
