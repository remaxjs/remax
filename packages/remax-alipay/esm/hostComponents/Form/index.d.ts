import * as React from 'react';
export interface FormProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  reportSubmit: boolean;
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
}
declare const Form: React.ForwardRefExoticComponent<FormProps & {
  children?: React.ReactNode;
} & React.RefAttributes<any>>;
export default Form;
