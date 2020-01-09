import createHostComponent from '../../createHostComponent';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
}

export default createHostComponent<LabelProps>('label');
