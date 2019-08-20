import React, {
  CSSProperties,
  FunctionComponent,
  useState,
  forwardRef,
} from 'react';
import propsAlias from './propsAlias';

export interface TextareaProps {
  id?: string;
  autoFocus?: boolean;
  className?: string;
  focus?: boolean;
  fixed?: boolean;
  name?: string;
  maxlength?: number;
  value: any;
  style?: CSSProperties;
  password?: string;
  confirmType?: 'send' | 'search' | 'next' | 'go' | 'done';
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  adjustPosition?: boolean;
  placeholder?: string;
  placeholderStyle?: CSSProperties;
  placeholderClass?: string;
  disabled?: boolean;
  cursorSpacing?: number;
  onInput?: (...params: any) => void;
  onClick?: (...params: any) => void;
  onFocus?: (...params: any) => void;
  onBlur?: (...params: any) => void;
  onConfirm?: () => void;
  onKeyboardHeightChange?: () => void;
  animation?: Record<string, any>[];
}

function useInnerFocus(
  initialValue?: boolean
): [boolean, typeof handleInnerFocus] {
  const [innerFocus = false, setInnerFocus] = useState(initialValue);

  const handleInnerFocus = (func?: Function, focus = true) => (
    ...params: any
  ) => {
    if (innerFocus !== focus) {
      setInnerFocus(true);
    }

    if (typeof func === 'function') {
      return func(...params);
    }
  };

  return [innerFocus, handleInnerFocus];
}

const TextareaRender: FunctionComponent<TextareaProps> = (props, ref) => {
  const {
    autoFocus,
    children,
    focus,
    onInput,
    onClick,
    onFocus,
    onBlur,
    ...restProps
  } = props;
  const [innerFocus, handleInnerFocus] = useInnerFocus(focus || autoFocus);

  const inputProps = propsAlias({
    ...restProps,
    autoFocus,
    focus: innerFocus,
    onInput: handleInnerFocus(onInput),
    onClick: handleInnerFocus(onClick),
    onFocus: handleInnerFocus(onFocus),
    onBlur: handleInnerFocus(onBlur, false),
    ref,
  });

  return React.createElement('textarea', inputProps, children);
};

const Textarea = forwardRef(TextareaRender);

Textarea.defaultProps = {
  maxlength: -1,
  selectionEnd: 999,
  selectionStart: 999,
  fixed: false,
};

export default Textarea;
