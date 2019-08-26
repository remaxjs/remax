import factory from './factory';

export interface LabelProps {
  id?: string;
  for?: string;
}
const Label = factory<LabelProps>('label');

export default Label;
