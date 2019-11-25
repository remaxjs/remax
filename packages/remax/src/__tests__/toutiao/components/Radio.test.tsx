import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Radio from '../../../adapters/toutiao/components/Radio';
import { reset } from '../../../instanceId';
import '../helpers/setupGlobals';

describe('Radio', () => {
  afterEach(() => {
    reset();
  });

  it('render correctly', () => {
    const testRenderer = TestRenderer.create(<Radio />);

    expect(testRenderer.toJSON()).toMatchSnapshot();
  });
});
