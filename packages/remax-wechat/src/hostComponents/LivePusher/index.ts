import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface LivePusherProps extends BaseProps {
  /** 推流地址。目前仅支持 flv, rtmp 格式 1.7.0  */
  url?: string;
  /** (default: RTC) SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话） 1.7.0  */
  mode?: string;
  /** (default: false) 自动推流 1.7.0  */
  autopush?: boolean;
  /** (default: false) 是否静音 1.7.0  */
  muted?: boolean;
  /** (default: true) 开启摄像头 1.7.0  */
  enableCamera?: boolean;
  /** (default: true) 自动聚集 1.7.0  */
  autoFocus?: boolean;
  /** (default: vertical) 画面方向 1.7.0  */
  orientation?: 'vertical' | 'horizontal';
  /** (default: 0) 美颜，取值范围 0-9 ，0 表示关闭 1.7.0 */
  beauty?: number;
  /** (default: 0) 美白，取值范围 0-9 ，0 表示关闭 1.7.0 */
  whiteness?: number;
  /** (default 9:16) 宽高比，可选值有 3:4, 9:16 1.7.0 */
  aspect?: '3:4' | '9:16';
  /** (default: 200) 最小码率 1.7.0 */
  minBitrate?: number;
  /** (default: 1000) 最大码率 1.7.0 */
  maxBitrate?: number;
  /** 进入后台时推流的等待画面 1.7.0 */
  waitingImage?: string;
  /** 等待画面资源的MD5值 1.7.0 */
  waitingImageHash?: string;
  /** (default: false) 调整焦距 2.1.0 */
  zoom?: boolean;
  /** (default: front) 前置或后置，值为front, back 2.3.0 */
  devicePosition?: string;
  /** (default: false) 进入后台时是否静音 1.7.0 */
  backgroundMute?: boolean;
  /** (default: false) 设置推流画面是否镜像，产生的效果在 live-player 反应到 2.7.0 */
  mirror?: boolean;
  /** 状态变化事件，detail = {code} 1.7.0 */
  onStateChange?: (event: any) => any;
  /** 网络状态通知，detail = {info} 1.9.0 */
  onNetStatus?: (event: any) => any;
  /** 渲染错误事件，detail = {errMsg, errCode} 1.7.4 */
  onError?: (event: any) => any;
  /** 背景音开始播放时触发 2.4.0 */
  onBgmStart?: (event: any) => any;
  /** 背景音进度变化时触发，detail = {progress, duration} 2.4.0 */
  onBgmProgress?: (event: any) => any;
  /** 背景音播放完成时触发 2.4.0 */
  onBgmComplete?: (event: any) => any;
}

export default createHostComponent<LivePusherProps>('live-pusher');
