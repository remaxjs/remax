import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import { Tabs, TabItem } from '../../hostComponents';

describe('Tabs', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Tabs className="class">
        <TabItem label="A" />
        <TabItem label="B" />
        <TabItem label="C" />
      </Tabs>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
