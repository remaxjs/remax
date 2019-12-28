import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface MovableAreaProps extends BaseProps {
  /** (default: false) 当里面的movable-view设置为支持双指缩放时，设置此值可将缩放手势生效区域修改为整个movable-area 1.9.90 */
  scaleArea?: boolean;
}

export default createHostComponent<MovableAreaProps>('movable-area');
