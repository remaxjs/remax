import * as React from 'react';
import factory from './factory';

export interface FormProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  reportSubmit: boolean;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}
const Form = factory<FormProps>('form');

export default Form;
