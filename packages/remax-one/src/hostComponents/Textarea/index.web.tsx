import * as React from 'react';
import { TextareaWebProps } from './props';
import TextareaAutoSize from 'react-autosize-textarea';
import useWebPlaceholderStyle from '../../useWebPlaceholderStyle';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import clsx from 'clsx';

const Textarea: React.FC<TextareaWebProps> = props => {
  const { onConfirm, onKeyPress, autoHeight, className, placeholderStyle, ...restProps } = filterProps(props);
  const [placeholderStyleClassName] = useWebPlaceholderStyle(placeholderStyle);

  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && typeof onConfirm === 'function') {
      onConfirm(e);
    }

    if (typeof onKeyPress === 'function') {
      onKeyPress(e);
    }
  }

  const textareaClassName = clsx('remax-textarea', className, placeholderStyleClassName);

  if (autoHeight) {
    return <TextareaAutoSize {...restProps} className={textareaClassName} onKeyPress={handleKeyPress} />;
  }

  return <textarea {...restProps} className={textareaClassName} onKeyPress={handleKeyPress} />;
};
export default Textarea;

Textarea.defaultProps = {
  onChange: () => void 0,
};
