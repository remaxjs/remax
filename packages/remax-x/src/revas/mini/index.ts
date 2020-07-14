import { adapter } from '../core/utils';
import { RevasCanvas } from '../core/Canvas';

export * from './render';

adapter.createOffscreenCanvas = (width: number, height: number) => {
  const dom = document.createElement('canvas');
  const scale = window.devicePixelRatio;
  dom.width = width * scale;
  dom.height = height * scale;
  const context = dom.getContext('2d')!;
  const canvas = new RevasCanvas(context);
  canvas.transform.scale(scale, scale);
  return canvas;
};

adapter.resetOffscreenCanvas = (prev: RevasCanvas, width: number, height: number) => {
  const { context, element } = prev;
  const scale = window.devicePixelRatio;
  element.width = width * scale;
  element.height = height * scale;
  const canvas = new RevasCanvas(context);
  canvas.transform.scale(scale, scale);
  return canvas;
};
