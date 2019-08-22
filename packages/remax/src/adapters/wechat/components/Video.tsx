import React, { FunctionComponent, forwardRef } from 'react';
import propsAlias from './propsAlias';

export interface VideoProps {
  src: string; // 要播放视频的资源地址，支持云文件ID（2.3.0） 1.0.0
  duration: number; // 否 指定视频时长 1.1.0
  controls: boolean; // true 否 是否显示默认播放控件（播放/暂停按钮、播放进度、时间） 1.0.0
  danmuList: object[]; // 否 弹幕列表 1.0.0
  danmuBtn: boolean; // false 否 是否显示弹幕按钮，只在初始化时有效，不能动态变更 1.0.0
  enableDanmu: boolean; // false 否 是否展示弹幕，只在初始化时有效，不能动态变更 1.0.0
  autoplay: boolean; // false 否 是否自动播放 1.0.0
  loop: boolean; // false 否 是否循环播放 1.4.0
  muted: boolean; // false 否 是否静音播放 1.4.0
  initialTime: number; // 0 否 指定视频初始播放位置 1.6.0
  pageGesture: boolean; // false 否 在非全屏模式下，是否开启亮度与音量调节手势（废弃，见 vslide-gesture） 1.6.0
  direction: number; //  否 设置全屏时视频的方向，不指定则根据宽高比自动判断 1.7.0
  showProgress: boolean; // true 否 若不设置，宽度大于240时才会显示 1.9.0
  showFullscreenBtn: boolean; // true 否 是否显示全屏按钮 1.9.0
  showPlayBtn: boolean; // true 否 是否显示视频底部控制栏的播放按钮 1.9.0
  showCenterPlayBtn: boolean; // true 否 是否显示视频中间的播放按钮 1.9.0
  enableProgressGesture: boolean; // true 否 是否开启控制进度的手势 1.9.0
  objectFit: string; // contain 否 当视频大小与 video 容器大小不一致时，视频的表现形式 1.0.0
  poster: string; //  否 视频封面的图片网络资源地址或云文件ID（2.3.0）。若 controls 属性值为 false 则设置 poster 无效 1.0.0
  showMuteBtn: boolean; // false 否 是否显示静音按钮 2.4.0
  title: string; //  否 视频的标题，全屏时在顶部展示 2.4.0
  playBtnPosition: string; // bottom 否 播放按钮的位置 2.4.0
  enablePlayGesture: boolean; // false 否 是否开启播放手势，即双击切换播放/暂停 2.4.0
  autoPauseIfNavigate: boolean; // true 否 当跳转到其它小程序页面时，是否自动暂停本页面的视频 2.5.0
  autoPauseIfOpenNative: boolean; // true 否 当跳转到其它微信原生页面时，是否自动暂停本页面的视频 2.5.0
  vslideGesture: boolean; // false 否 在非全屏模式下，是否开启亮度与音量调节手势（同 page-gesture） 2.6.2
  vslideGestureInFullscreen: boolean; // true 否 在全屏模式下，是否开启亮度与音量调节手势 2.6.2
  onPlay: (event: any) => any; // 否 当开始/继续播放时触发play事件 1.0.0
  onPause: (event: any) => any; //  否 当暂停播放时触发 pause 事件 1.0.0
  onEnded: (event: any) => any; //  否 当播放到末尾时触发 ended 事件 1.0.0
  // 否 播放进度变化时触发，event.detail = {currentTime, duration} 。触发频率 250ms 一次 1.0.0
  onTimeUpdate: (event: any) => any;
  // 否 视频进入和退出全屏时触发，event.detail = {fullScreen, direction}，
  // direction 有效值为 vertical 或 horizontal 1.4.0
  onFullScreenChange: (event: any) => any;
  onWaiting: (event: any) => any; //  否 视频出现缓冲时触发 1.7.0
  onError: (event: any) => any; // 否 视频播放出错时触发 1.7.0
  onProgress: (event: any) => any;
  animation: object[];
}

const VideoRender: FunctionComponent<VideoProps> = (props, ref) => {
  const { children, ...restProps } = props;
  const videoProps = propsAlias({
    ...restProps,
    ref,
  });

  return React.createElement('video', videoProps, children);
};

const Video = forwardRef(VideoRender);

Video.defaultProps = {
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
};

export default Video;
