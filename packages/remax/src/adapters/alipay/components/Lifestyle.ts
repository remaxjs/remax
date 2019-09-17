import factory from './factory';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

const Lifestyle = factory<LifestyleProps>('lifestyle');

export default Lifestyle;
