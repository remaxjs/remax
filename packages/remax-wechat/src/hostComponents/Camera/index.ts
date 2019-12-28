import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface CameraProps extends BaseProps {
  /** (default: normal) 应用模式，只在初始化时有效，不能动态变更 2.1.0  */
  mode?: 'normal' | 'scanCode';
  /** (default: back) 摄像头朝向 1.0.0 */
  devicePosition?: 'front' | 'back';
  /** (default: auto) 闪光灯，值为auto, on, off 1.0.0 */
  flash?: 'auto' | 'on' | 'off' | 'torch';
  /** (default: medium) 指定期望的相机帧数据尺寸 2.7.0 */
  frameSize?: 'small' | 'medium' | 'large';
  /** 摄像头在非正常终止时触发，如退出后台等情况 1.0.0 */
  onStop?: (event: any) => any;
  /** 用户不允许使用摄像头时触发 1.0.0 */
  onError?: (event: any) => any;
  /** 相机初始化完成时触发 2.7.0 */
  onInitDone?: (event: any) => any;
  /** 在扫码识别成功时触发，仅在 mode="scanCode" 时生效 2.1.0 */
  onScanCode?: (event: any) => any;
}

export default createHostComponent<CameraProps>('camera');
