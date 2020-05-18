import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import { FunctionalPageNavigator as UnKnownComponent } from 'remax/wechat';
import C from '@/components/C';
import chooseImage from '@/api/chooseImage';
import chooseImageMini from '@/api/chooseImageMini';
import chooseImageAli from '@/api/chooseImageAli';
import styles from './index.module.css';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    chooseImage();
    chooseImageMini();
    chooseImageAli();
    await Promise.resolve(1);
  }

  function handleTouchStart() {}
  const obj = {};
  const value = 0 ?? 1;

  return (
    <View className={styles['page-index']}>
      <C className="b" />
      <View onClick={handleClick} onTouchStart={handleTouchStart} id="view" data-foo="bar" {...props}>
        foo
        {obj?.a?.b}
        {value}
      </View>
      <Image wechat-bindtap={handleClick} />
      <UnKnownComponent />
      <UnBindingComponent />
      {TextElement}
    </View>
  );
};
