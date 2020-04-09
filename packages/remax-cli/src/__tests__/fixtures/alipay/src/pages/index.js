import * as React from 'react';
import { View, Text } from 'remax/alipay';
import { FunctionalPageNavigator as UnKnownComponent } from 'remax/wechat';
import C from '@/components/C';
import styles from './index.module.css';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    await Promise.resolve(1);
  }

  function handleTouchStart() {}
  const obj = {};
  const value = 0 ?? 1;

  return (
    <View className={styles['page-index']}>
      <C className="b" />
      <View
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        id="view"
        data-foo="bar"
        key="my-view"
        {...props}
      >
        foo
        {obj?.a?.b}
        {value}
      </View>
      <UnKnownComponent />
      <UnBindingComponent />
      {TextElement}
    </View>
  );
};
