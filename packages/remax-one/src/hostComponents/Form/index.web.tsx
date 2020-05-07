import * as React from 'react';
import { FormWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export type FormProps = FormWebProps;

const Form: React.FC<FormWebProps> = props => <form {...filterProps(props)} />;

export default Form;
