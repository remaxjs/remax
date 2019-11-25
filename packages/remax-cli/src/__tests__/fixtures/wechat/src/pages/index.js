import * as React from 'react';
import { View, Text } from 'remax/wechat';
import { Lifestyle as UnknownComponent } from 'remax/alipay';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  function handleClick() {}

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
    </View>
  );
};
