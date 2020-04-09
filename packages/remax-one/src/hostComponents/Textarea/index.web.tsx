import * as React from 'react';
import { TextareaWebProps } from './props';
import TextareaAutosize from 'react-autosize-textarea';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

const Input: React.FC<TextareaWebProps> = props => {
  const { onConfirm, onKeyPress, autoHeight, ...restProps } = props;

  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  if (autoHeight) {
    return <TextareaAutosize onKeyPress={handleKeyPress} {...filterProps(restProps)} />;
  }

  return <textarea onKeyPress={handleKeyPress} {...filterProps(restProps)} />;
};
export default Input;

Input.defaultProps = {
  onChange: () => void 0,
};
