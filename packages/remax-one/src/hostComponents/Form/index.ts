import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { FormEvent } from '../../types';

export interface FormProps {
  // 通用属性
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  onSubmit?: (e: FormEvent) => void;
  onReset?: (e: FormEvent) => void;
}
const Form = createHostComponent<FormProps>('form');

export default Form;
