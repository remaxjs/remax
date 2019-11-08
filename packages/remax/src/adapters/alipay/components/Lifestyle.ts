import createHostComponent from '../../../createHostComponent';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

const Lifestyle = createHostComponent<LifestyleProps>('lifestyle');

export default Lifestyle;
