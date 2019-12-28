import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface CoverViewProps extends BaseProps {
  /**	设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效	2.1.0  */
  scrollTop?: number | string;
}

export default createHostComponent<CoverViewProps>('cover-view');
