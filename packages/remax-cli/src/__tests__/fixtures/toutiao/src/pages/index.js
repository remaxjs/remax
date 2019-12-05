import * as React from 'react';
import { View, Text } from 'remax/toutiao';
import { FunctionalPageNavigator as UnknownComponent } from 'remax/wechat';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  async function handleClick() {
    await Promise.resolve();
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
    </View>
  );
};
