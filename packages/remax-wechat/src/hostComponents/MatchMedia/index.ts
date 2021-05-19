import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface MatchMediaProps extends BaseProps {
  /** 页面最小宽度（ px 为单位） 2.11.1 */
  minWidth?: number;
  /** 页面最大宽度（ px 为单位） 2.11.1 */
  maxWidth?: number;
  /** 页面宽度（ px 为单位） 2.11.1 */
  width?: number;
  /** 页面最小高度（ px 为单位） 2.11.1 */
  minHeight?: number;
  /** 页面最大高度（ px 为单位） 2.11.1 */
  maxHeight?: number;
  /** 页面高度（ px 为单位） 2.11.1 */
  height?: number;
  /** 屏幕方向（ landscape 或 portrait ） 2.11.1 */
  orientation?: 'portrait' | 'landscape';
}
/**
 * @see https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html
 */
export const MatchMedia: React.ComponentType<MatchMediaProps> = createHostComponent<MatchMediaProps>('match-media');
