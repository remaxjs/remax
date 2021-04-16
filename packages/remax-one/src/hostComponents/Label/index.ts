import * as React from 'react';
import createHostComponent from '../../createHostComponent';
import { LabelProps } from './props';

export type { LabelProps };

const Label: React.ComponentType<LabelProps> = createHostComponent<LabelProps>('label', { htmlFor: 'for' });

export default Label;
