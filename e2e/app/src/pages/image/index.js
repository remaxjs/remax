import * as React from 'react';
import { View, Image } from 'remax/one';
import catImage from '@/assets/images/cat.jpg';
import './index.css';

export default () => {
  return (
    <View>
      {/* CASE: 静态资源引入 */}
      <Image className="cat-image" src={catImage} />
      {/* CASE: css 中引用静态资源 */}
      <View className="dog-image" />
    </View>
  );
};
