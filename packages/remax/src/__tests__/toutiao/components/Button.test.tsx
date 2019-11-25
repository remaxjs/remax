import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from '../../../adapters/toutiao/components/Button';

describe('Button', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Button className="class">Button</Button>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
