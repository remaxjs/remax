import createHostComponent from '../../createHostComponent';

export interface VideoProps {
  src: string;
  id?: string;
  poster?: string;
  objectFit?: 'contain' | 'fill';
  initialTime?: number;
  duration?: number;
  controls?: boolean;
  autoplay?: boolean;
  direction?: number;
  loop?: boolean;
  muted?: boolean;
  showFullscreenBtn?: boolean;
  showPlayBtn?: boolean;
  showCenterPlayBtn?: boolean;
  showMuteBtn?: boolean;
  enableProgressGesture?: boolean;
  mobilenetHintType?: 0 | 1 | 3;
  onPlay?: (e: any) => void;
  onPause?: (e: any) => void;
  onEnded?: (e: any) => void;
  onTimeUpdate?: (e: any) => void;
  onLoading?: (e: any) => void;
  onError?: (e: any) => void;
  onFullScreenChange?: (e: any) => void;
  onTap?: (e: any) => void;
  onUserAction?: (e: any) => void;
}

export default createHostComponent<VideoProps>('video');
