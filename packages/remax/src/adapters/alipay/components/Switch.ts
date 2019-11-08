import createHostComponent from '../../../createHostComponent';

export interface SwitchProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  controlled?: boolean;
  onChange?: (e: any) => void;
}

const Switch = createHostComponent<SwitchProps>('switch');

export default Switch;
