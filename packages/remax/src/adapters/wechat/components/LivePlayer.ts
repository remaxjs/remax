import factory from './factory';

const LivePlayer = factory<LivePlayerProps>('live-player');

export interface LivePlayerProps {
  src?: string; //  否 音视频地址。目前仅支持 flv, rtmp 格式 1.7.0
  mode?: string; // live 否 模式 1.7.0
  autoplay?: boolean; // false 否 自动播放 1.7.0
  muted?: boolean; // false 否 是否静音 1.7.0
  orientation?: string; // vertical 否 画面方向 1.7.0
  objectFit?: string; // contain 否 填充模式，可选值有 contain，fillCrop 1.7.0
  backgroundMute?: boolean; // false 否 进入后台时是否静音（已废弃，默认退台静音） 1.7.0
  minCache?: number; // 1 否 最小缓冲区，单位s（RTC 模式推荐 0.2s） 1.7.0
  maxCache?: number; // 3 否 最大缓冲区，单位s（RTC 模式推荐 0.8s） 1.7.0
  soundMode?: string; // speaker 否 声音输出方式 1.9.90
  autoPauseIfNavigate?: boolean; // true 否 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放 2.5.0
  autoPauseIfOpenNative?: boolean; // true 否 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放 2.5.0
  onStateChange?: (event: any) => any; //  否 播放状态变化事件，detail = {code} 1.7.0
  onFullScreenChange?: (event: any) => any; //  否 全屏变化事件，detail = {direction, fullScreen} 1.7.0
  onNetStatus?: (event: any) => any; //  否 网络状态通知，detail = {info} 1.9.0
}

export default LivePlayer;
