import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface WebViewProps extends BaseProps {
  src?: string;
  onMessage?: (e: any) => void;
  progressbarColor?: string;
}

export const WebView = createHostComponent<WebViewProps>('web-view');

WebView.defaultProps = {
  progressbarColor: '#51a0d8',
};
