import factory from './factory';

export interface SwitchProps {
  id?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  controlled?: boolean;
  onChange?: (e: any) => void;
}

const Switch = factory<SwitchProps>('switch');

export default Switch;
