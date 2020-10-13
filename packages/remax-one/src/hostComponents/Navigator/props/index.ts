import * as React from 'react';

export { default as defaults } from './default';

export interface NavigatorProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  url: string;
  action: 'navigate' | 'redirect' | 'switchTab' | 'reLaunch';
  /**
   * 	指定点击时的样式类
   */
  hoverClassName?: string;
  /**
   * 	按住后多久出现点击态，单位毫秒
   */
  hoverStartTime?: number;
  /**
   * 	手指松开后点击态保留时间，单位毫秒
   */
  hoverStayTime?: number;
}
