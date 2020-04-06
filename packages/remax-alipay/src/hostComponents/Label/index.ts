import createHostComponent from '../../createHostComponent';

export interface LabelProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  for?: string;
  className?: string;
}

export default createHostComponent<LabelProps>('label');
