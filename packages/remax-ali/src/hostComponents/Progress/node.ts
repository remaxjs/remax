import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  percent: 'percent',
  showInfo: 'show-info',
  strokeWidth: 'stroke-width',
  activeColor: 'active-color',
  backgroundColor: 'background-color',
  active: 'active',
};

export const props = unique(Object.values(alias));
