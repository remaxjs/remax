import createHostComponent from '../../createHostComponent';
import * as React from 'react';

export interface TextareaProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClassName?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  autoHeight?: boolean;
  showCount?: boolean;
  controlled?: boolean;
  onInput?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
}

const Textarea = createHostComponent<TextareaProps>('textarea');

export default Textarea;
