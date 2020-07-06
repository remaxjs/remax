import * as React from 'react';
import { ScrollView as UnknownComponentWechat } from 'remax/wechat';
import { Lifestyle as UnknownComponentAli } from 'remax/ali';
import { View, Text, Input, Image } from 'remax/one';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    await Promise.resolve(1);
  }

  function handleTouchStart() {}

  return (
    <View>
      <Image src="/images/cat.png" />
      <View onClick={handleClick} onTouchStart={handleTouchStart} id="view" data-foo="bar" {...props}>
        foo
      </View>
      {TextElement}
      <UnknownComponentAli />
      <UnknownComponentWechat />
      <Input />
      <Input focus={true} />
      <View>
        <View>
          <Text>
            <Text>text</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
