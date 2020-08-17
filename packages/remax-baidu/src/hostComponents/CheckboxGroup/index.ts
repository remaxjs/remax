import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface CheckboxGroupProps extends BaseProps {
  onChange?: (event: any) => void;
}

export const CheckboxGroup: React.ComponentType<CheckboxGroupProps> = createHostComponent<CheckboxGroupProps>(
  'checkbox-group'
);
