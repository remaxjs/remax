import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  size: 'size',
  type: 'type',
  plain: 'plain',
  disabled: 'disabled',
  loading: 'loading',
  hoverClass: 'hover-class',
  hoverClassName: 'hover-class',
  hoverStartTime: 'hover-start-time',
  hoverStayTime: 'hover-stay-time',
  hoverStopPropagation: 'hover-stop-propagation',
  formType: 'form-type',
  openType: 'open-type',
  scope: 'scope',
  onClick: 'onTap',
  onTap: 'onTap',
  appParameter: 'app-parameter',
  publicId: 'public-id',
  onGetAuthorize: 'onGetAuthorize',
  onError: 'onError',
};

export const props = unique(Object.values(alias));
