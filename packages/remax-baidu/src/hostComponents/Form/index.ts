import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface FormProps extends BaseProps {
  reportSubmit?: boolean;
  reportType?: 'default' | 'subscribe';
  templateId?: string | string[];
  subscribeId?: string;
  onSubmit?: (event: any) => void;
  onReset?: (event: any) => void;
}

export const Form: React.ComponentType<FormProps> = createHostComponent<FormProps>('form');

Form.defaultProps = {
  reportSubmit: false,
  reportType: 'default',
};
