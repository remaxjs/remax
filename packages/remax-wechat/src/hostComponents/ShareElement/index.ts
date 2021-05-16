import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface ShareElementProps extends BaseProps {
  /** 映射标记 2.16.0 */
  key: string;
  /** 是否进行动画 2.16.0 */
  transform?: boolean;
  /** 动画时长，单位毫秒 2.16.0 */
  duration?: number;
  /** css缓动函数 2.16.0 */
  easingFunction?: string;
}

/** @see https://developers.weixin.qq.com/miniprogram/dev/component/share-element.html */
export const ShareElement: React.ComponentType<ShareElementProps> = createHostComponent<ShareElementProps>(
  'share-element'
);
ShareElement.defaultProps = {
  transform: false,
  duration: 300,
  easingFunction: 'ease-out',
};
