import * as React from 'react';
import { TextareaWebProps } from './props';
import TextareaAutoSize from 'react-autosize-textarea';
import useWebPlaceholderStyle from '../../useWebPlaceholderStyle';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import clsx from 'clsx';

const Input: React.FC<TextareaWebProps> = props => {
  const { onConfirm, onKeyPress, autoHeight, className, placeholderStyle, ...restProps } = props;
  const [placeholderStyleClassName] = useWebPlaceholderStyle(placeholderStyle);

  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  const textareaClassName = clsx(className, placeholderStyleClassName);

  if (autoHeight) {
    return <TextareaAutoSize className={textareaClassName} onKeyPress={handleKeyPress} {...filterProps(restProps)} />;
  }

  return <textarea className={textareaClassName} onKeyPress={handleKeyPress} {...filterProps(restProps)} />;
};
export default Input;

Input.defaultProps = {
  onChange: () => void 0,
};
