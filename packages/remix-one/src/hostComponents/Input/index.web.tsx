import * as React from 'react';
import { InputWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import useWebPlaceholderStyle from '../../useWebPlaceholderStyle';
import clsx from 'clsx';

export type InputProps = InputWebProps;

const Input: React.FC<InputWebProps> = props => {
  const { password, type, onConfirm, onKeyPress, placeholderStyle, className, ...restProps } = filterProps(props);
  const [placeholderStyleClassName] = useWebPlaceholderStyle(placeholderStyle);

  const inputType = password ? 'password' : type;

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  return (
    <input
      {...restProps}
      type={inputType}
      onKeyPress={handleKeyPress}
      className={clsx('remix-input', className, placeholderStyleClassName)}
    />
  );
};
export default Input;

Input.defaultProps = {
  onChange: () => void 0,
};
