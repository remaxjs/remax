import * as React from 'react';
import { View, Text, Image, Checkbox, Label, Swiper, SwiperItem } from 'remax';
import styles from './index.css';

const arr = [1, 2, 3, 4];

const SW = () => (
  <Swiper style={{ height: '300px' }} class="demo-swiper" previousMargin="10px" nextMargin="10px">
    {arr.map(it => {
      return (
        <SwiperItem>
          <View>
            laladsadla {it}
            <View>lalala {it}</View>
            <View>lalala {it}</View>
            <View>lalala {it}</View>
          </View>
        </SwiperItem>
      );
    })}
  </Swiper>
);

export default props => {
  return (
    <View className={styles.app} entry>
      <View className={styles.header}>
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className={styles.logo}
          alt="logo"
        />
        <View className={styles.text}>
          编辑
          <Text className={styles.path}>src/pages/index/index.js</Text> 开始
        </View>
      </View>

      <Label>
        <Checkbox />
        <Text>check</Text>
      </Label>
      <SW />
    </View>
  );
};
