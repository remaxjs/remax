import factory from './factory';

export interface VideoProps {
  src?: string;
  autoplay?: boolean;
  poster?: string;
  onPlay?: (e: any) => void;
  onPause?: (e: any) => void;
  onEnded?: (e: any) => void;
  onError?: (e: any) => void;
  onTimeUpdate?: (e: any) => void;
  onFullscreenchange?: (e: any) => void;
}

const Video = factory<VideoProps>('video');

export default Video;
