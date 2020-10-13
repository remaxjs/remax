import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface WebViewProps {
  readonly dataset?: DOMStringMap;
  id?: string;
  src: string;
  onMessage?: (e: any) => void;
}

export const WebView: React.ComponentType<WebViewProps> = createHostComponent<WebViewProps>('web-view');
