import factory from './factory';

export interface LifestyleProps {
  publicId: string;
  onFollow?: (e: any) => void;
}

const Lifestyle = factory<LifestyleProps>('lifestyle');

export default Lifestyle;
