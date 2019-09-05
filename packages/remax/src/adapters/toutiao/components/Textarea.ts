import factory from './factory';

export interface TextareaProps {
  value?: string;
  placeholder?: string;
  placeholderStyle?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  autoHeight?: boolean;
  fixed?: boolean;
  cursorSpacing?: number;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  onInput?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  onConfirm?: (e: any) => void;
}

const Textarea = factory<TextareaProps>('textarea');

export default Textarea;
