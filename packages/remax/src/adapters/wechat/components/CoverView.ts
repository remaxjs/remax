import factory from './factory';
import { BaseProps } from './baseTyping';

const CoverView = factory<CoverViewProps>('cover-view');

export interface CoverViewProps extends BaseProps {
  /**	设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效	2.1.0  */
  scrollTop?: number | string;
}

export default CoverView;
