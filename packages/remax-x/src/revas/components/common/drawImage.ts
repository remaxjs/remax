import { Node } from '../../core/Node';
import * as imageLoader from './imageLoader';
import { clamp, getMergedStyleFromNode, getFrameFromNode } from '../../core/utils';
import { RevasCanvas } from '../../core/Canvas';

export default function drawImage(canvas: RevasCanvas, node: Node, flags: any) {
  const image = imageLoader.get(node.props.src);
  if (image.height <= 0) {
    return;
  }
  const frame = getFrameFromNode(node);
  const { width, height, x, y } = frame;
  if (width <= 0 || height <= 0) {
    return;
  }
  const style = getMergedStyleFromNode(node);

  const actualSize = {
    width: image.width,
    height: image.height,
  };

  const focusPoint = style.focusPoint || {
    x: actualSize.width * 0.5,
    y: actualSize.height * 0.5,
  };

  const hasClip = flags.hasRadius && !flags.hasClip;

  if (hasClip) {
    canvas.context.save();
    canvas.context.clip();
  }

  if (style.resizeMode === 'contain') {
    const scale = Math.min(width / actualSize.width, height / actualSize.height) || 1;

    const scaledSize = {
      width: actualSize.width * scale,
      height: actualSize.height * scale,
    };

    // Clip the image to rectangle (sx, sy, sw, sh).
    const sw = Math.round(actualSize.width);
    const sh = Math.round(actualSize.height);

    // Scale the image to dimensions (dw, dh).
    const dw = Math.round(scaledSize.width);
    const dh = Math.round(scaledSize.height);

    // Draw the image on the canvas at coordinates (dx, dy).
    const dx = Math.round((width - scaledSize.width) / 2 + x);
    const dy = Math.round((height - scaledSize.height) / 2 + y);

    canvas.context.drawImage(image, 0, 0, sw, sh, dx, dy, dw, dh);
  } else {
    const scale = Math.max(width / actualSize.width, height / actualSize.height) || 1;

    const scaledSize = {
      width: actualSize.width * scale,
      height: actualSize.height * scale,
    };

    // Clip the image to rectangle (sx, sy, sw, sh).
    const sx = Math.round(clamp(width * 0.5 - focusPoint.x * scale, width - scaledSize.width, 0)) * (-1 / scale);
    const sy = Math.round(clamp(height * 0.5 - focusPoint.y * scale, height - scaledSize.height, 0)) * (-1 / scale);
    const sw = Math.round(actualSize.width - sx * 2);
    const sh = Math.round(actualSize.height - sy * 2);

    // Scale the image to dimensions (dw, dh).
    const dw = Math.round(width);
    const dh = Math.round(height);

    // Draw the image on the canvas at coordinates (dx, dy).
    const dx = Math.round(x);
    const dy = Math.round(y);

    canvas.context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
  }
  if (hasClip) {
    canvas.context.restore();
  }
}
