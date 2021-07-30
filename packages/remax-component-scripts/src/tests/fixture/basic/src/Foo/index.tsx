import * as React from 'react';
import { Button } from 'remax/one';
import './index.less';

export interface FooProps {
  size?: 'default' | 'mini';
  onClick: () => void;
}

const Foo: React.FC<FooProps> = ({ size, onClick }) => {
  return (
    <Button
      className="button"
      onTap={onClick}
      style={{
        fontSize: size === 'default' ? 30 : 20,
      }}
    >
      text
    </Button>
  );
};

export default Foo;
