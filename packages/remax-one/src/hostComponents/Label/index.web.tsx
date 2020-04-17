import * as React from 'react';
import { LabelProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

const Label: React.FC<LabelProps> = props => <label {...filterProps(props)} />;

export default Label;
