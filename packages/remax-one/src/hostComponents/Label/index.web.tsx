import * as React from 'react';
import { LabelProps } from './props';
import { filterProps } from '../../utils/isPlatformSpecifyProp';

export type { LabelProps };

const Label: React.ForwardRefRenderFunction<any, LabelProps> = (props, ref) => (
  <label {...filterProps(props)} ref={ref} />
);

export default React.forwardRef(Label);
