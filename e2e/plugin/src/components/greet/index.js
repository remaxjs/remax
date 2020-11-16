import * as React from 'react';
import { useComponentInstance } from 'remax';
import { View, Text } from 'remax/one';
import Badge from 'mini-antui/es/badge';

export default ({ name }) => {
  const [state, setState] = React.useState('aaa');
  const componentInstance = useComponentInstance();

  return (
    <View
      id="greeting"
      className={name || 'greeting'}
      onClick={() => {
        setState('bbb');
      }}
    >
      <Text>Hello Greeting!!! {name}</Text>
      <Text>componentInstance is {typeof componentInstance}</Text>
      <View>{state}</View>
      <View>
        <Badge text="badgeText" />
      </View>
    </View>
  );
};
