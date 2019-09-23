import factory from './factory';

export interface ProgressProps {
  percent?: number;
  strokeWidth?: number;
  color?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
  activeMode?: string;
}

const Progress = factory<ProgressProps>('progress');

export default Progress;
