import createHostComponent from '../../../createHostComponent';
import { BaseProps } from '../types/component';

export interface WebViewProps extends BaseProps {
  src?: string;
  onMessage?: (e: any) => void;
}

const WebView = createHostComponent<WebViewProps>('web-view');

export default WebView;
