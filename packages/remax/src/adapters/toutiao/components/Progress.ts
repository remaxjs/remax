import createHostComponent from '../../../createHostComponent';
import { BaseProps } from './baseTyping';

export interface ProgressProps extends BaseProps {
  percent?: number;
  strokeWidth?: number;
  color?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
  activeMode?: string;
}

const Progress = createHostComponent<ProgressProps>('progress');

export default Progress;
