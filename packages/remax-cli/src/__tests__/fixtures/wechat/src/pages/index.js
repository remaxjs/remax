import * as React from 'react';
import {
  ScrollView,
  Swiper,
  SwiperItem,
  View,
  Text,
  Input,
} from 'remax/wechat';
import { Lifestyle as UnknownComponent } from 'remax/alipay';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    await Promise.resolve(1);
  }

  function handleTouchStart() {}

  return (
    <View>
      <View
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        id="view"
        data-foo="bar"
        {...props}
      >
        foo
      </View>
      {TextElement}
      <UnknownComponent />
      <UnBindingComponent />
      <Input />
      <Input focus={true} />
      <ScrollView scrollTop={0}>
        <View />
      </ScrollView>
      <ScrollView scrollLeft={0}>
        <View />
      </ScrollView>
      <Swiper>
        <SwiperItem>a</SwiperItem>
        <SwiperItem>b</SwiperItem>
      </Swiper>
      <View>
        <View>
          <ScrollView>
            <View />
          </ScrollView>
          <Swiper current={5}>
            <SwiperItem>a</SwiperItem>
            <SwiperItem>b</SwiperItem>
          </Swiper>
          <Text>
            <Text>text</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
