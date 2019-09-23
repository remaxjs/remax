import factory from './factory';

const Camera = factory<CameraProps>('camera');

export interface CameraProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  mode?: string; // normal 否 应用模式，只在初始化时有效，不能动态变更 2.1.0
  devicePosition?: string; // back 否 摄像头朝向 1.0.0
  flash?: string; // auto 否 闪光灯，值为auto, on, off 1.0.0
  frameSize?: string; // medium 否 指定期望的相机帧数据尺寸 2.7.0
  onStop?: (event: any) => any; //  否 摄像头在非正常终止时触发，如退出后台等情况 1.0.0
  onError?: (event: any) => any; //  否 用户不允许使用摄像头时触发 1.0.0
  onInitDone?: (event: any) => any; //  否 相机初始化完成时触发 2.7.0
  onScanCode?: (event: any) => any; //  否 在扫码识别成功时触发，仅在 mode="scanCode" 时生效 2.1.0
}

export default Camera;
