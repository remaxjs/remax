import * as React from 'react';
import { createHostComponent } from '@remax/shared';

export interface ContactButtonProps {
  readonly dataset?: DOMStringMap;
  tntInstId: string;
  scene: string;
  size?: string | number;
  color?: string;
  icon?: string;
  alipayCardNo?: string;
}

export const ContactButton: React.ComponentType<ContactButtonProps> = createHostComponent<ContactButtonProps>(
  'contact-button'
);
