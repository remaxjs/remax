import * as React from 'react';
import factory from './factory';

export interface CoverViewProps {
  className?: string;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
}
const CoverView = factory<CoverViewProps>('cover-view');

export default CoverView;
