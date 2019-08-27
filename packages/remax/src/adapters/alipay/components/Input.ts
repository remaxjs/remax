import factory from './factory';

export interface InputProps {
  id?: string;
  value?: string;
  name?: string;
  type?: string;
  password?: boolean;
  placeholder?: string;
  placeholderStyle?: string;
  placeholderClass?: string;
  disabled?: boolean;
  maxlength?: number;
  focus?: boolean;
  confirmType?: string;
  confirmHold?: boolean;
  cursor?: number;
  selectionStart?: number;
  selectionEnd?: number;
  randomNumber?: boolean;
  controlled?: boolean;
  onInput?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}
const Input = factory<InputProps>('input');

export default Input;
