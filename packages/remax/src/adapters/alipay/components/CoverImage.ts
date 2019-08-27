import factory from './factory';

export interface CoverImageProps {
  src?: string;
  onTap?: (e: any) => void;
}
const CoverImage = factory<CoverImageProps>('cover-image');

export default CoverImage;
