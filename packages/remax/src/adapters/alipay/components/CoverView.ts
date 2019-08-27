import factory from './factory';

export interface CoverViewProps {
  onTap?: (e: any) => void;
}
const CoverView = factory<CoverViewProps>('cover-view');

export default CoverView;
