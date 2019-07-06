import * as React from 'react';
import { render, View } from '..';

class Context {
  data: any;

  setData(data: any) {
    this.data = data;
  }
}

describe('remax render', () => {
  it('render correctly', () => {
    const Page = () => <View className="foo">hello</View>;
    const context = new Context();
    render(<Page />, context);
    expect(context.data).toMatchSnapshot();
  });
});
