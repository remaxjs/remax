import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

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
  /** 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） 2.10.3 */
  pictureInPictureMode?: string | string[];
  /** 播放状态变化事件，detail = {code} 1.7.0  */
  onStateChange?: (event: GenericEvent) => any;
  /** 全屏变化事件，detail = {direction, fullScreen} 1.7.0  */
  onFullscreenChange?: (event: GenericEvent) => any;
  /** 网络状态通知，detail = {info} 1.9.0  */
  onNetStatus?: (event: GenericEvent) => any;
  /** 播放音量大小通知，detail = {}	2.10.0 */
  onAudioVolumeNotify?: (event: GenericEvent) => any;
  /** 播放器进入小窗	2.11.0 */
  onEnterPictureInPicture?: (event: GenericEvent) => any;
  /** 播放器退出小窗	2.11.0 */
  onLeavePictureInPicture?: (event: GenericEvent) => any;
}
/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html
 */
export const LivePlayer: React.ComponentType<LivePlayerProps> = createHostComponent<LivePlayerProps>('live-player');

LivePlayer.defaultProps = {
  mode: 'live',
  autoplay: false,
  muted: false,
  orientation: 'vertical',
  objectFit: 'contain',
  backgroundMute: false,
  minCache: 1,
  maxCache: 3,
  soundMode: 'speaker',
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
};
