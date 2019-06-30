import * as React from 'react';
import { View } from '@remax/components';
import { render } from '..';

class Context {
  data: any;

  setData(data: any) {
    this.data = data;
  }
}

describe('remax render', () => {
  it('render correctly', () => {
    const Page = () => <View>hello</View>;
    const context = new Context();
    render(<Page />, context);
    expect(context.data).toMatchSnapshot();
  });
});
