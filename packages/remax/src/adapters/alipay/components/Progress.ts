import factory from './factory';

export interface ProgressProps {
  id?: string;
  className?: string;
  percent?: number;
  showInfo?: boolean;
  strokeWidth?: string;
  activeColor?: string;
  backgroundColor?: string;
  active?: boolean;
}
const Progress = factory<ProgressProps>('progress');

export default Progress;
