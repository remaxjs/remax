import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Button } from '../../hostComponents';

describe('Button', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Button className="class">Button</Button>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
