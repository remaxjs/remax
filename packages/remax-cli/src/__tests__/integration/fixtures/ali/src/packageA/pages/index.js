import * as React from 'react';
import { View, Text } from 'remax';
import C from '@/components/C';
import './index.css';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  function handleClick() {}

  function handleTouchStart() {}

  return (
    <View className="pageA-index">
      <C className="a" />
      <View onClick={handleClick} onTouchStart={handleTouchStart} id="view" data-foo="bar" {...props}>
        foo
      </View>
      {TextElement}
    </View>
  );
};
