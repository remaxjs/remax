import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps } from '../../types/component';

export interface MovableAreaProps extends BaseProps {
  /** (default: false) 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area 1.9.90 */
  scaleArea?: boolean;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/movable-area.html
 */
export const MovableArea: React.ComponentType<MovableAreaProps> = createHostComponent<MovableAreaProps>('movable-area');

MovableArea.defaultProps = {
  scaleArea: false,
};
