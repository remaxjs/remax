import factory from './factory';
import * as React from 'react';

export interface TextareaProps {
  id?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  placeholderStyle?: React.CSSProperties;
  placeholderClass?: string;
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

const Textarea = factory<TextareaProps>('textarea');

export default Textarea;
