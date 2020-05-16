import { createHostComponent } from '@remax/shared';

import { BaseProps } from '../../types/component';

export interface WebViewProps extends BaseProps {
  src?: string;
  onMessage?: (e: any) => void;
}

export const WebView = createHostComponent<WebViewProps>('web-view');
