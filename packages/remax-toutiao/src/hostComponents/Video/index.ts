import createHostComponent from '../../createHostComponent';

import { BaseProps } from '../../types/component';

export interface VideoProps extends BaseProps {
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

export default createHostComponent<VideoProps>('video');
