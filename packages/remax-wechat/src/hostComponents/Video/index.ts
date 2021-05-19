import * as React from 'react';
import { BaseProps, GenericEvent } from '../../types/component';
import { createHostComponent } from '@remax/runtime';

const hostComponentName = 'video';

export interface VideoProps extends BaseProps {
  /** 要播放视频的资源地址，支持云文件ID（2.3.0） 1.0.0 */
  src: string;
  /** 指定视频时长 1.1.0 */
  duration?: number;
  /** 是否显示默认播放控件（播放/暂停按钮、播放进度、时间） 1.0.0 */
  controls?: boolean;
  /** 弹幕列表 1.0.0 */
  danmuList?: any[];
  /** 是否显示弹幕按钮，只在初始化时有效，不能动态变更 1.0.0 */
  danmuBtn?: boolean;
  /** 是否展示弹幕，只在初始化时有效，不能动态变更 1.0.0 */
  enableDanmu?: boolean;
  /** 是否自动播放 1.0.0 */
  autoplay?: boolean;
  /** 是否循环播放 1.4.0 */
  loop?: boolean;
  /** 是否静音播放 1.4.0 */
  muted?: boolean;
  /** 指定视频初始播放位置 1.6.0 */
  initialTime?: number;
  /** 在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture） 1.6.0 */
  pageGesture?: boolean;
  /** 设置全屏时视频的方向，不指定则根据宽高比自动判断 1.7.0 */
  direction?: 0 | 90 | -90;
  /** 若不设置，宽度大于240时才会显示 1.9.0 */
  showProgress?: boolean;
  /** 是否显示全屏按钮 1.9.0 */
  showFullscreenBtn?: boolean;
  /** 是否显示视频底部控制栏的播放按钮 1.9.0 */
  showPlayBtn?: boolean;
  /** 是否显示视频中间的播放按钮 1.9.0 */
  showCenterPlayBtn?: boolean;
  /** 是否开启控制进度的手势 1.9.0 */
  enableProgressGesture?: boolean;
  /** 当视频大小与 video 容器大小不一致时，视频的表现形式 1.0.0 */
  objectFit?: 'contain' | 'fill' | 'cover';
  /** 视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效 1.0.0 */
  poster?: string;
  /** 用于给搜索等场景作为视频封面展示，建议使用无播放 icon 的视频封面图，只支持网络地址 */
  posterForCrawler?: string;
  /** 显示投屏按钮。只安卓且同层渲染下生效，支持 DLNA 协议 1.10.2 */
  showCastingButton?: boolean;
  /** 设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]） */
  pictureInPictureMode?: string | string[];
  /** 是否在小窗模式下显示播放进度	2.11.0 */
  pictureInPictureShowProgress?: boolean;
  /** 是否显示静音按钮 2.4.0 */
  showMuteBtn?: boolean;
  /** 视频的标题，全屏时在顶部展示 2.4.0 */
  title?: string;
  /** 播放按钮的位置 2.4.0 */
  playBtnPosition?: 'bottom' | 'center';
  /** 是否开启播放手势，即双击切换播放/暂停 2.4.0 */
  enablePlayGesture?: boolean;
  /** 是否开启手机横屏时自动全屏，当系统设置开启自动旋转时生效 2.11.0 */
  enableAutoRotation?: false;
  /** 是否显示锁屏按钮，仅在全屏时显示，锁屏后控制栏的操作 2.11.0 */
  showScreenLockButton?: false;
  /** 是否显示截屏按钮，仅在全屏时显示 2.13.0 */
  showSnapshotButton?: boolean;
  /** 是否展示后台音频播放按钮 2.14.3 */
  showBackgroundPlaybackButton?: boolean;
  /** 进入后台音频播放后的通知栏图标（Android 独有） */
  backgroundPoster?: string;
  /** 当跳转到其它小程序页面时，是否自动暂停本页面的视频 2.5.0 */
  autoPauseIfNavigate?: boolean;
  /** 当跳转到其它微信原生页面时，是否自动暂停本页面的视频 2.5.0 */
  autoPauseIfOpenNative?: boolean;
  /** 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture） 2.6.2 */
  vslideGesture?: boolean;
  /** 在全屏模式下，是否开启亮度与音量调节手势 2.6.2 */
  vslideGestureInFullscreen?: boolean;
  /** 当开始/继续播放时触发play事件 1.0.0 */
  onPlay?: (event: GenericEvent) => any;
  /** 当暂停播放时触发 pause 事件 1.0.0 */
  onPause?: (event: GenericEvent) => any;
  /** 当播放到末尾时触发 ended 事件 1.0.0 */
  onEnded?: (event: GenericEvent) => any;
  /** 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次 1.0.0 */
  onTimeUpdate?: (event: GenericEvent) => any;
  /** 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，direction 有效值为 vertical 或 horizontal 1.4.0 */
  onFullScreenChange?: (event: GenericEvent) => any;
  /** 视频出现缓冲时触发 1.7.0 */
  onWaiting?: (event: GenericEvent) => any;
  /** 视频播放出错时触发 1.7.0 */
  onError?: (event: GenericEvent) => any;
  /** 加载进度变化时触发，只支持一段加载。event.detail = {buffered}，百分比 2.4.0 */
  onProgress?: (event: GenericEvent) => any;
  /** 视频元数据加载完成时触发。event.detail = {width, height, duration} 2.7.0 */
  onLoadedMetaData?: (event: GenericEvent) => any;
  /** 切换 controls 显示隐藏时触发。event.detail = {show} 2.9.5 */
  onControlsToggle?: (event: GenericEvent) => any;
  /** 播放器进入小窗 2.11.0 */
  onEnterPictureInPicture?: (event: GenericEvent) => any;
  /** 播放器退出小窗 2.11.0 */
  onLeavePictureInPicture?: (event: GenericEvent) => any;
  /** seek 完成时触发 (position iOS 单位 s, Android 单位 ms) 2.12.0 */
  onSeekComplete?: (event: GenericEvent) => any;
}

const VideoRender: React.ForwardRefRenderFunction<any, VideoProps> = (props, ref) => {
  const { children, ...restProps } = props;
  const videoProps = {
    ...restProps,
    ref,
  };

  return React.createElement(hostComponentName, videoProps, children);
};

/**
 * video 默认宽度 300px、高度 225px，可通过 wxss 设置宽高
 * https://developers.weixin.qq.com/miniprogram/dev/component/video.html
 */
const RemaxVideo = React.forwardRef(VideoRender);

RemaxVideo.defaultProps = {
  controls: true,
  danmuBtn: false,
  enableDanmu: false,
  autoplay: false,
  loop: false,
  muted: false,
  initialTime: 0,
  pageGesture: false,
  showProgress: true,
  showFullscreenBtn: true,
  showPlayBtn: true,
  showCenterPlayBtn: true,
  enableProgressGesture: true,
  objectFit: 'contain',
  showMuteBtn: false,
  playBtnPosition: 'bottom',
  enablePlayGesture: false,
  autoPauseIfNavigate: true,
  autoPauseIfOpenNative: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true,
  showCastingButton: false,
  pictureInPictureShowProgress: false,
  enableAutoRotation: false,
  showScreenLockButton: false,
  showSnapshotButton: false,
  showBackgroundPlaybackButton: false,
};

export const Video: React.ComponentType<VideoProps> = createHostComponent<VideoProps>(hostComponentName, RemaxVideo);
