import * as React from 'react';
import { FormWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export type FormProps = FormWebProps;

const Form: React.ForwardRefRenderFunction<any, FormWebProps> = (props, ref) => (
  <form {...filterProps(props)} ref={ref} />
);

export default React.forwardRef(Form);
