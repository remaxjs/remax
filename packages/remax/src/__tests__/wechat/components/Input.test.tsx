import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Input from '../../../adapters/wechat/components/Input';

describe('Input', () => {
  it('render correctly', () => {
    const tree = TestRenderer.create(<Input value="" type="text" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('render placeholderStyle as inline style', () => {
    const color = '#ffffff';

    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Input placeholderStyle={{ color }} />
    );

    const instance = component.root.findByType('input');

    expect(instance.props['placeholder-style']).toEqual(`color:${color};`);
  });

  it('focus correctly', () => {
    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Input />
    );

    const instance = component.root.findByType('input');

    expect(instance.props.focus).not.toBeTruthy();

    TestRenderer.act(() => {
      instance.props.bindtap();
    });

    expect(instance.props.focus).toBeTruthy();

    TestRenderer.act(() => {
      instance.props.bindblur();
    });

    expect(instance.props.focus).not.toBeTruthy();
  });
});
