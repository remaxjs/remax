import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface ProgressProps extends BaseProps {
  percent?: number;
  strokeWidth?: number;
  color?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
  activeMode?: string;
}

export const Progress = createHostComponent<ProgressProps>('progress');
