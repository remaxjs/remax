import * as React from 'react';
import { useQuery } from 'remax';
import { View } from 'remax/one';

export default props => {
  const query = useQuery();

  return (
    <View>
      <View>query from props: {props.location.query.name}</View>
      <View>query from hook: {query.name}</View>
    </View>
  );
};
