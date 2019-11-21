import * as React from 'react';
import { createHostComponent } from 'remax/macro';

export default () => {
  const FooBar = createHostComponent('foo-bar', [
    'foo',
    ['class', 'className'],
  ]);

  return (
    <>
      <FooBar foo="bar" className="class" />
    </>
  );
};
