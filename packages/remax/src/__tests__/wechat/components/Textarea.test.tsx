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

  it('focus is false by default', () => {
    const component: TestRenderer.ReactTestRenderer = TestRenderer.create(
      <Textarea value="" />
    );

    const instance = component.root.findByType('textarea');

    expect(instance.props.focus).toBeFalsy();
    expect(instance.props.autoFocus).toBeFalsy();
  });
});
