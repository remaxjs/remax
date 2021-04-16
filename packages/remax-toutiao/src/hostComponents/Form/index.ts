import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

export interface FormProps extends BaseProps {
  onSubmit?: (e: any) => void;
  onReset?: (e: any) => void;
  reportSubmit?: boolean;
  catchSubmit?: (e: any) => void;
  catchReset?: (e: any) => void;
}

export const Form: React.ComponentType<FormProps> = createHostComponent<FormProps>('form');

Form.defaultProps = {
  reportSubmit: false,
};
