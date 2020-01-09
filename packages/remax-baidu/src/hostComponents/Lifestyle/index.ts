import createHostComponent from '../../createHostComponent';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

export default createHostComponent<LifestyleProps>('lifestyle');
