import { unique } from '@remax/shared';

export const alias = {
  id: 'id',
  className: 'class',
  style: 'style',
  mode: 'mode',
  devicePosition: 'device-position',
  flash: 'flash',
  outputDimension: 'outputDimension',
  applyMicPermissionWhenInit: 'applyMicPermissionWhenInit',
  frameSize: 'frame-size',
  frameFormat: 'frame-format',
  maxDuration: 'max-duration',
  onStop: 'onStop',
  onError: 'onError',
  onScanCode: 'onScanCode',
};

export const props = unique(Object.values(alias));
