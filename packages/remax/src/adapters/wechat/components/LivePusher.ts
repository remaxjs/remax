import factory from './factory';

const LivePusher = factory<LivePusherProps>('live-pusher');

export interface LivePusherProps {
  url?: string; //  否 推流地址。目前仅支持 flv, rtmp 格式 1.7.0
  mode?: string; // RTC 否 SD（标清）, HD（高清）, FHD（超清）, RTC（实时通话） 1.7.0
  autopush?: boolean; // false 否 自动推流 1.7.0
  muted?: boolean; // false 否 是否静音 1.7.0
  enableCamera?: boolean; // true 否 开启摄像头 1.7.0
  autoFocus?: boolean; // true 否 自动聚集 1.7.0
  orientation?: string; // vertical 否 画面方向 1.7.0
  beauty?: number; // 0 否 美颜，取值范围 0-9 ，0 表示关闭 1.7.0
  whiteness?: number; // 0 否 美白，取值范围 0-9 ，0 表示关闭 1.7.0
  aspect?: string; // 9:16 否 宽高比，可选值有 3:4, 9:16 1.7.0
  minBitrate?: number; // 200 否 最小码率 1.7.0
  maxBitrate?: number; // 1000 否 最大码率 1.7.0
  waitingImage?: string; //  否 进入后台时推流的等待画面 1.7.0
  waitingImageHash?: string; //  否 等待画面资源的MD5值 1.7.0
  zoom?: boolean; // false 否 调整焦距 2.1.0
  devicePosition?: string; // front 否 前置或后置，值为front, back 2.3.0
  backgroundMute?: boolean; // false 否 进入后台时是否静音 1.7.0
  mirror?: boolean; // false 否 设置推流画面是否镜像，产生的效果在 live-player 反应到 2.7.0
  onStateChange?: (event: any) => any; //  否 状态变化事件，detail = {code} 1.7.0
  onNetStatus?: (event: any) => any; //  否 网络状态通知，detail = {info} 1.9.0
  onError?: (event: any) => any; //  否 渲染错误事件，detail = {errMsg, errCode} 1.7.4
  onBgmStart?: (event: any) => any; //  否 背景音开始播放时触发 2.4.0
  onBgmProgress?: (event: any) => any; //  否 背景音进度变化时触发，detail = {progress, duration} 2.4.0
  onBgmComplete?: (event: any) => any; //  否 背景音播放完成时触发 2.4.0
}
export default LivePusher;
