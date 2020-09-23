import * as React from 'react';
import { createHostComponent } from '@remax/shared';
import { BaseProps } from '../../types/component';

export interface VideoProps extends BaseProps {
  src?: string;
  title?: string;
  initialTime?: number;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  objectFit?: 'contain' | 'fill' | 'cover';
  poster?: string;
  pageGesture?: boolean;
  direction?: number;
  showProgress?: boolean;
  showFullscreenBtn?: boolean;
  enableProgressGesture?: boolean;
  danmuList?: any[];
  danmuBtn?: boolean;
  enableDanmu?: boolean;
  showPlayBtn?: boolean;
  showCenterPlayBtn?: boolean;
  showMuteBtn?: boolean;
  showNoWifiTip?: boolean;
  vslideGesture?: boolean;
  vslideGestureInFullscreen?: boolean;
  enablePlayGesture?: boolean;
  showRateBtn?: boolean;
  showVslideBtnInFullscreen?: boolean;
  silentPlay?: boolean;
  onPlay?: (event: any) => void;
  onPause?: (event: any) => void;
  onEnded?: (event: any) => void;
  onTimeupdate?: (event: any) => void;
  onFullscreenChange?: (event: any) => void;
  onWaiting?: (event: any) => void;
  onError?: (event: any) => void;
  onLoadedMetadata?: (event: any) => void;
}

export const Video: React.ComponentType<VideoProps> = createHostComponent<VideoProps>('video');

Video.defaultProps = {
  initialTime: 0,
  controls: true,
  autoPlay: false,
  loop: false,
  muted: false,
  objectFit: 'contain',
  pageGesture: false,
  direction: 0,
  showProgress: true,
  showFullscreenBtn: true,
  enableProgressGesture: true,
  danmuBtn: false,
  danmuList: [],
  enableDanmu: false,
  showPlayBtn: true,
  showCenterPlayBtn: true,
  showMuteBtn: false,
  showNoWifiTip: true,
  vslideGesture: false,
  vslideGestureInFullscreen: true,
  enablePlayGesture: false,
  showRateBtn: false,
  showVslideBtnInFullscreen: true,
  silentPlay: false,
};
