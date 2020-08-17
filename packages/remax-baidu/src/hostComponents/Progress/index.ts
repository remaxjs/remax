import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface ProgressProps extends BaseProps {
  percent?: number;
  showInfo?: boolean;
  strokeWidth?: number | string;
  borderRadius?: number | string;
  fontSize?: number | string;
  color?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
  activeMode?: string;
  duration?: number;
}

export const Progress: React.ComponentType<ProgressProps> = createHostComponent<ProgressProps>('progress');

Progress.defaultProps = {
  showInfo: false,
  strokeWidth: 2,
  borderRadius: 0,
  fontSize: 16,
  color: '#09BB07',
  activeColor: '#09BB07',
  backgroundColor: '#E6E6E6',
  active: false,
  activeMode: 'backwards',
  duration: 20,
};
