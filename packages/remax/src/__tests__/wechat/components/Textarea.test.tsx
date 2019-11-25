import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Textarea from '../../../adapters/wechat/components/Textarea';

describe('TextArea', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Textarea className="class" value="" />
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('focus correctly', () => {
    const handleFocus = jest.fn();

    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Textarea value="" onFocus={handleFocus} />
    );

    const instance = component.root.findByType('textarea');

    expect(instance.props.focus).not.toBeTruthy();

    TestRenderer.act(() => {
      instance.props.onFocus();
    });

    expect(instance.props.focus).toBeTruthy();
    expect(handleFocus).toBeCalled();

    TestRenderer.act(() => {
      instance.props.onBlur();
    });

    expect(instance.props.focus).not.toBeTruthy();
  });
});
