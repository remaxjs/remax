import * as React from 'react';
import { createHostComponent } from '@remax/runtime';

import { BaseProps } from '../../types/component';

// docs: https://microapp.bytedance.com/dev/cn/mini-app/develop/component/media-component/video
export interface VideoProps extends BaseProps {
  /** 要播放视频的资源地址 1.0.0 */
  src: string;
  /** 是否自动播放 1.0.0 */
  autoplay?: boolean;
  /** 视频封面的图片网络资源地址 1.0.0 */
  poster?: string;
  /** 当开始播放时触发 play 事件 1.0.0 */
  onPlay?: (event: any) => any;
  /** 当暂停播放时触发 pause 事件 1.0.0 */
  onPause?: (event: any) => any;
  /** 当播放到末尾时触发 ended 事件 1.0.0 */
  onEnded?: (event: any) => any;
  /** 视频播放出错时触发 1.0.0 */
  onError?: (event: any) => any;
  /** 播放进度变化时触发，event.detail = { currentTime, duration } 1.18.0 */
  onTimeUpdate?: (event: any) => any;
  /** 视频进入和退出全屏时触发 1.18.0 */
  onFullScreenChange?: (event: any) => any;
  /** 是否循环播放 1.47.0 */
  loop?: boolean;
  /** 是否显示全屏按钮 1.47.0 */
  showFullscreenBtn?: boolean;
  /** 是否显示播放、暂停、重播按钮，不包括视频封面的播放按钮 1.47.0 */
  showPlayBtn?: boolean;
  /** 是否显示全部播放控件 1.47.0 */
  controls?: boolean;
  /** 当视频大小与 video 容器大小不一致时，视频的表现形式：contain（包含），fill（填充），cover（覆盖） 1.47.0 */
  objectFit?: 'contain' | 'fill' | 'cover';
  /** 播放按钮的位置：center（视频中间），bottom（控制条上） 1.47.0 */
  playBtnPosition?: 'center' | 'bottom';
  /** 视频出现缓冲时触发 1.47.0 */
  onWaiting?: (event: any) => any;
}

export const Video: React.ComponentType<VideoProps> = createHostComponent<VideoProps>('video');

Video.defaultProps = {
  autoplay: false,
  loop: false,
  showFullscreenBtn: true,
  showPlayBtn: true,
  controls: true,
  objectFit: 'contain',
  playBtnPosition: 'center',
};
