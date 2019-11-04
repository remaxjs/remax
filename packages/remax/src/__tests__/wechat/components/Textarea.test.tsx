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
    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Textarea value="" />
    );

    const instance = component.root.findByType('textarea');

    expect(instance.props.focus).not.toBeTruthy();

    TestRenderer.act(() => {
      instance.props.onClick();
    });

    expect(instance.props.focus).toBeTruthy();

    TestRenderer.act(() => {
      instance.props.onBlur();
    });

    expect(instance.props.focus).not.toBeTruthy();
  });
});
