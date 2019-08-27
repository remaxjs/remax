import factory from './factory';

export interface CheckboxProps {
  id?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  color?: string;
  onChange?: (e: any) => void;
}
const Checkbox = factory<CheckboxProps>('checkbox');

export default Checkbox;
