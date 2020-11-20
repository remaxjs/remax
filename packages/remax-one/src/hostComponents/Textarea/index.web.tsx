import * as React from 'react';
import { TextareaWebProps } from './props';
import TextareaAutoSize from 'react-autosize-textarea';
import useWebPlaceholderStyle from '../../useWebPlaceholderStyle';
import { filterProps } from '../../utils/isPlatformSpecifyProp';
import clsx from 'clsx';

export type TextareaProps = TextareaWebProps;

const Textarea: React.ForwardRefRenderFunction<any, TextareaWebProps> = (props, ref) => {
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
    return <TextareaAutoSize {...restProps} className={textareaClassName} ref={ref} onKeyPress={handleKeyPress} />;
  }

  return <textarea {...restProps} className={textareaClassName} ref={ref} onKeyPress={handleKeyPress} />;
};
export default React.forwardRef(Textarea);
