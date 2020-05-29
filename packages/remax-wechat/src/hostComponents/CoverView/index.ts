import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface CoverViewProps extends BaseProps {
  /**	设置顶部滚动偏移量，仅在设置了 overflow-y: scroll 成为滚动元素后生效	2.1.0  */
  scrollTop?: number | string;
}

/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html
 */
export const CoverView = createHostComponent<CoverViewProps>('cover-view');
