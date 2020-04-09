import * as React from 'react';
import { InputWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

const Input: React.FC<InputWebProps> = props => {
  const { password, type, onConfirm, onKeyPress, ...restProps } = props;

  const inputType = password ? 'password' : type;

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  return <input {...filterProps(restProps)} type={inputType} onKeyPress={handleKeyPress} />;
};
export default Input;

Input.defaultProps = {
  onChange: () => void 0,
};
