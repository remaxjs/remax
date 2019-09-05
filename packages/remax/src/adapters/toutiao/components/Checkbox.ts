import factory from './factory';

export interface CheckboxProps {
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  color?: string;
}

const Checkbox = factory<CheckboxProps>('checkbox');

export default Checkbox;
