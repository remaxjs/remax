import factory from './factory';
import { CSSProperties } from 'react';

const CoverView = factory<CoverViewProps>('cover-view');

export interface CoverViewProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
  scrollTop?: number | string; //		否	设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效	2.1.0
  onClick?: (event: any) => void;
  animation?: Record<string, any>[];
}

export default CoverView;
