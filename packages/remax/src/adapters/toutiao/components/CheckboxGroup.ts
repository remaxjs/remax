import factory from './factory';

export interface CheckboxGroupProps {
  onChange?: (e: any) => void;
}

const CheckboxGroup = factory<CheckboxGroupProps>('checkbox-group');

export default CheckboxGroup;
