import * as React from 'react';
import { createHostComponent } from '@remax/runtime';
import { BaseProps, GenericEvent } from '../../types/component';

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
  /** 设置美颜类型 nature: 自然美颜 smooth: 光滑美颜 2.12.0 */
  beautyStyle?: 'smooth' | 'nature';
  /** 设置色彩滤镜
   *  standard: 标准 pink: 粉嫩 nostalgia: 怀旧 blues: 蓝调 romantic: 浪漫
   *  cool: 清凉 fresher: 清新 solor: 日系 aestheticism: 唯美 whitening: 美白 cerisered: 樱红
   */
  filter?:
    | 'standard'
    | 'pink'
    | 'nostalgia'
    | 'blues'
    | 'romantic'
    | 'cool'
    | 'fresher'
    | 'solor'
    | 'aestheticism'
    | 'whitening'
    | 'cerisered';
  /** (default: 0) 美白，取值范围 0-9 ，0 表示关闭 1.7.0 */
  whiteness?: number;
  /** (default 9:16) 宽高比，可选值有 3:4, 9:16 1.7.0 */
  aspect?: '3:4' | '9:16';
  /** (default: 200) 最小码率 1.7.0 */
  minBitrate?: number;
  /** (default: 1000) 最大码率 1.7.0 */
  maxBitrate?: number;
  /**
   * 高音质(48KHz)或低音质(16KHz)，值为high, low  1.7.0
   */
  audioQuality?: 'high' | 'low';
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
  /** (default: false) 同 mirror 属性，后续 mirror 将废弃	2.10.0 */
  remoteMirror?: boolean;
  /** (default: auto) 控制本地预览画面是否镜像	2.10.0 */
  localMirror?: 'auto' | 'enable' | 'disable';
  /** (default: 0) 音频混响类型	2.10.0 */
  audioReverbType?: number;
  /** (default: true) 开启或关闭麦克风	2.10.0 */
  enableMic?: boolean;
  /** (default: false) 是否开启音频自动增益	2.10.0 */
  enableAgc?: boolean;
  /** (default: false) 是否开启音频噪声抑制	2.10.0 */
  enableAns?: boolean;
  /** (default: voicecall) 音量类型	2.10.0 */
  audioVolumeType?: 'media' | 'voicecall';
  /** (default: 360) 上推的视频流的分辨率宽度	2.10.0 */
  videoWidth?: number;
  /** (default: 640) 上推的视频流的分辨率高度	2.10.0 */
  videoHeight?: number;
  /** 状态变化事件，detail = {code} 1.7.0 */
  onStateChange?: (event: GenericEvent) => any;
  /** 网络状态通知，detail = {info} 1.9.0 */
  onNetStatus?: (event: GenericEvent) => any;
  /** 渲染错误事件，detail = {errMsg, errCode} 1.7.4 */
  onError?: (event: GenericEvent) => any;
  /** 背景音开始播放时触发 2.4.0 */
  onBgmStart?: (event: GenericEvent) => any;
  /** 背景音进度变化时触发，detail = {progress, duration} 2.4.0 */
  onBgmProgress?: (event: GenericEvent) => any;
  /** 背景音播放完成时触发 2.4.0 */
  onBgmComplete?: (event: GenericEvent) => any;
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html
 */
export const LivePusher: React.ComponentType<LivePusherProps> = createHostComponent<LivePusherProps>('live-pusher');

LivePusher.defaultProps = {
  mode: 'RTC',
  autopush: false,
  muted: false,
  enableCamera: false,
  autoFocus: true,
  orientation: 'vertical',
  beauty: 0,
  whiteness: 0,
  aspect: '9:16',
  minBitrate: 200,
  maxBitrate: 1000,
  audioQuality: 'high',
  zoom: false,
  devicePosition: 'front',
  backgroundMute: false,
  mirror: false,
  remoteMirror: false,
  localMirror: 'auto',
  audioReverbType: 0,
  enableMic: true,
  enableAgc: true,
  enableAns: false,
  audioVolumeType: 'voicecall',
  videoWidth: 360,
  videoHeight: 640,
};
