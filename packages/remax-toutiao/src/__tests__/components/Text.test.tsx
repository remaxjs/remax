import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Text from '../../hostComponents/Text';

describe('Text', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(
      <Text className="class">text</Text>
    );

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
