import * as React from 'react';
import { useQuery } from 'remax';
import { View } from 'remax/one';

export default () => {
  const query = useQuery();
  return (
    <View>
      page two
      <View>{query.q}</View>
    </View>
  );
};
