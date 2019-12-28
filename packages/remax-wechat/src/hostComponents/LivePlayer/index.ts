import createHostComponent from '../../createHostComponent';
import { BaseProps } from '../../types/component';

export interface LivePlayerProps extends BaseProps {
  /** 音视频地址。目前仅支持 flv, rtmp 格式 1.7.0  */
  src?: string;
  /** (default: live) 模式 1.7.0  */
  mode?: 'live' | 'RTC';
  /** (default: false) 自动播放 1.7.0  */
  autoplay?: boolean;
  /** (default: false) 是否静音 1.7.0  */
  muted?: boolean;
  /** (default: vertical) 画面方向 1.7.0  */
  orientation?: 'vertical' | 'horizontal';
  /** (default: contain) 填充模式，可选值有 contain，fillCrop 1.7.0  */
  objectFit?: 'contain' | 'fillCrop';
  /** (default: false) 进入后台时是否静音（已废弃，默认退台静音） 1.7.0  */
  backgroundMute?: boolean;
  /** (default: 1) 最小缓冲区，单位s（RTC 模式推荐 0.2s） 1.7.0  */
  minCache?: number;
  /** (default: 3) 最大缓冲区，单位s（RTC 模式推荐 0.8s） 1.7.0  */
  maxCache?: number;
  /** (default: speaker) 声音输出方式 1.9.90  */
  soundMode?: 'speaker' | 'ear';
  /** (default: true) 当跳转到其它小程序页面时，是否自动暂停本页面的实时音视频播放 2.5.0  */
  autoPauseIfNavigate?: boolean;
  /** (default: true) 当跳转到其它微信原生页面时，是否自动暂停本页面的实时音视频播放 2.5.0  */
  autoPauseIfOpenNative?: boolean;
  /** 播放状态变化事件，detail = {code} 1.7.0  */
  onStateChange?: (event: any) => any;
  /** 全屏变化事件，detail = {direction, fullScreen} 1.7.0  */
  onFullScreenChange?: (event: any) => any;
  /** 网络状态通知，detail = {info} 1.9.0  */
  onNetStatus?: (event: any) => any;
}

export default createHostComponent<LivePlayerProps>('live-player');
