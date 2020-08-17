import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface RadioGroupProps extends BaseProps {
  onChange?: (event: any) => void;
}

export const RadioGroup: React.ComponentType<RadioGroupProps> = createHostComponent<RadioGroupProps>('radio-group');
