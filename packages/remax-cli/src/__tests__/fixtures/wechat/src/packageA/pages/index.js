import * as React from 'react';
import { View, Text } from 'remax/wechat';

const pageA = () => {
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
    </View>
  );
};

export default pageA;
