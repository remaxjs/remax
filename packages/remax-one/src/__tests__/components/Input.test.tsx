import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Input } from '../../hostComponents';

describe('Input', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Input className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });

  it('default value', () => {
    const testRenderer = TestRenderer.create(<Input className="class" defaultValue="1" />);

    const instance = testRenderer.root.findByType('input');

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
    const testRenderer = TestRenderer.create(<Input className="class" value="1" />);

    const instance = testRenderer.root.findByType('input');

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
