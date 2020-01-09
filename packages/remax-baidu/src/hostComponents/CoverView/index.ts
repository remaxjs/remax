import * as React from 'react';
import createHostComponent from '../../createHostComponent';

export interface CoverViewProps {
  readonly dataset?: DOMStringMap;
  className?: string;
  style?: React.CSSProperties;
  onTap?: (e: any) => void;
}
const CoverView = createHostComponent<CoverViewProps>('cover-view');

export default CoverView;
