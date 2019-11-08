import * as React from 'react';
import { createHostComponent } from 'remax/macro';

export default () => {
  const FooBar = createHostComponent('foo-bar', ['foo']);

  return <FooBar foo="bar" />;
};
