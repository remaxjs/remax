import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Textarea } from '../../hostComponents';

describe('Textarea', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Textarea className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('default value', () => {
    const testRenderer = TestRenderer.create(<Textarea className="class" defaultValue="1" />);

    const instance = testRenderer.root.findByType('textarea');

    expect(instance.props.value).toEqual('1');

    instance.props.onInput({
      target: {},
      currentTarget: {},
      detail: {
        value: '2',
      },
    });

    expect(instance.props.value).toEqual('2');
  });

  it('value', () => {
    const testRenderer = TestRenderer.create(<Textarea className="class" value="1" />);

    const instance = testRenderer.root.findByType('textarea');

    expect(instance.props.value).toEqual('1');

    instance.props.onInput({
      target: {},
      currentTarget: {},
      detail: {
        value: '2',
      },
    });

    expect(instance.props.value).toEqual('1');
  });
});
