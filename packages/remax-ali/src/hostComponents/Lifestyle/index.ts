import { createHostComponent } from '@remax/shared';

export interface LifestyleProps {
  readonly dataset?: DOMStringMap;
  publicId: string;
  onFollow?: (e: any) => void;
}

export const Lifestyle = createHostComponent<LifestyleProps>('lifestyle');
