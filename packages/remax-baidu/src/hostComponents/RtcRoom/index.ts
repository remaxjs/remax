import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps, GenericEvent } from '../../types/component';

export interface RtcRoomProps extends BaseProps {
  /** 否开启摄像头 */
  enableCamera?: boolean;
  /** 否开启摄像头自动对焦 */
  enableAutoFocus?: boolean;
  /** 否支持双手滑动调整摄像头聚焦 */
  enableZoom?: boolean;
  /** 置前置还是后置摄像头，有效值：front、back */
  devicePosition?: 'front' | 'back';
  /** 否开启麦克风 */
  enableMic?: boolean;
  /** 否开启音频自动增益 */
  enableAgc?: boolean;
  /** 否开启音频噪声抑制 */
  enableAns?: boolean;
  /** 最大码率 */
  bitrate?: number;
  /** 视频分辨率宽 */
  videoWidth?: number;
  /** 视频分辨率高 */
  videoHeight?: number;
  /** 置远端看到的画面的镜像效果，该属性的变化不会影响到本地画面，仅影响远端看到的画面效果 */
  enableRemoteMirror?: boolean;
  /** 置本地摄像头预览画面的镜像效果，有效值：auto、enable、disable */
  localMirror?: 'auto' | 'enable' | 'disable';
  /** 声音输出方式，有效值：speaker、ear */
  soundMode?: 'speaker' | 'ear';
  /** 房间状态变化事件，参考下方状态码表格，detail = { code, msg, userInfo } */
  onStateChange?: (event: GenericEvent) => void;
  /** 错误事件，参考下方错误码表格，detail = { errMsg, errCode } */
  onError?: (event: GenericEvent) => void;
}

export const RtcRoom: React.ComponentType<RtcRoomProps> = createHostComponent<RtcRoomProps>('rtc-room');

RtcRoom.defaultProps = {
  enableCamera: true,
  enableAutoFocus: true,
  enableZoom: false,
  devicePosition: 'front',
  enableMic: true,
  enableAgc: false,
  enableAns: false,
  bitrate: 900,
  videoWidth: 360,
  videoHeight: 640,
  enableRemoteMirror: false,
  localMirror: 'auto',
  soundMode: 'speaker',
};
