import factory from './factory';

export interface LabelProps {
  for?: string;
}

const Label = factory<LabelProps>('label');

export default Label;
