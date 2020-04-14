import * as React from 'react';
import { FormWebProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

const Form: React.FC<FormWebProps> = props => <form {...filterProps(props)} />;

export default Form;
