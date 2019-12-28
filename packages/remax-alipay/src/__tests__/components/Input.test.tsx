import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Input } from '../../hostComponents';

describe('Input', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Input className="class" />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
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
});
