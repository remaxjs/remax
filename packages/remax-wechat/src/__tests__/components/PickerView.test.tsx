import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import PickerView from '../../hostComponents/PickerView';

describe('PickerView', () => {
  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<PickerView />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
