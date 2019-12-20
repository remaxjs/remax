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

    expect(instance.props.placeholderStyle).toEqual({
      color,
    });
  });

  it('focus correctly', () => {
    const handleFocus = jest.fn();
    const handleBlur = jest.fn();

    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Input value="" onFocus={handleFocus} onBlur={handleBlur} />
    );

    const instance = component.root.findByType('input');

    expect(instance.props.focus).not.toBeTruthy();

    instance.props.onFocus();

    expect(handleFocus).toBeCalled();

    instance.props.onBlur();

    expect(handleBlur).toBeCalled();
  });
});
