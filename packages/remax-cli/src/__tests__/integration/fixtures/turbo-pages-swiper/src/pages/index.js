import * as React from 'react';
import { View, Swiper, SwiperItem } from '@alipay/remix';

export default props => {
  const pictures = ['https://example.com/1.jpg', 'https://example.com/2.jpg'];
  return (
    <View>
      <Swiper>
        {pictures.map(pic => (
          <SwiperItem key={pic}>
            <View>{pic}</View>
          </SwiperItem>
        ))}
      </Swiper>
    </View>
  );
};
