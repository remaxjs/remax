import * as React from 'react';
import { View, useQuery } from '@alipay/remix';

export default props => {
  const query = useQuery();

  return (
    <View>
      <View>query from props: {props.location.query.name}</View>
      <View>query from hook: {query.name}</View>
    </View>
  );
};
