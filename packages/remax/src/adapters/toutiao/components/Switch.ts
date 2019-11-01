import factory from './factory';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  type?: string;
  onChange?: (e: any) => void;
  color?: string;
}

const Switch = factory<SwitchProps>('switch');

export default Switch;
