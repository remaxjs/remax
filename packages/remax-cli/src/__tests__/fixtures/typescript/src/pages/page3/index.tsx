import * as React from 'react';
import View from '../../components/View';
import Text from '../../components/Text';

export default () => {
  const props = {};
  const TextElement = React.cloneElement(<Text />);

  const handleClick = () => void 0;
  const handleTouchStart = () => void 0;

  return (
    <View>
      <View
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        id="view"
        {...props}
      >
        foo
      </View>
      {TextElement}
    </View>
  );
};
