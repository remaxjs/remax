import createHostComponent from '../../../createHostComponent';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
}
const Label = createHostComponent<LabelProps>('label');

export default Label;
