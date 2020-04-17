import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface FormProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  reportSubmit: boolean;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}
const Form = createHostComponent<FormProps>('form');

export default Form;
