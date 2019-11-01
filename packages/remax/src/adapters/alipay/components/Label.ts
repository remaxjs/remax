import factory from './factory';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
}
const Label = factory<LabelProps>('label');

export default Label;
