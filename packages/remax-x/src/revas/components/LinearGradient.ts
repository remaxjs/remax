import * as React from 'react';
import { NodeProps, Node } from '../core/Node';
import { getFrameFromNode } from '../core/utils';
import { RevasCanvas } from '../core/Canvas';

export type LinearGradientProps = {
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  colors: string[];
} & NodeProps;

const DEFAULT_STYLE = { path: true };

export default class LinearGradient extends React.Component<LinearGradientProps> {
  render() {
    return React.createElement('LinearGradient', {
      ...this.props,
      style: [DEFAULT_STYLE, this.props.style],
      customDrawer: drawGradient,
    });
  }
}

function drawGradient(canvas: RevasCanvas, node: Node) {
  const { colors } = node.props as LinearGradientProps;
  if (colors && colors.length > 0) {
    const { start = { x: 0, y: 0 }, end = { x: 1, y: 0 } } = node.props as LinearGradientProps;
    const frame = getFrameFromNode(node);
    const grad = canvas.context.createLinearGradient(
      start.x * frame.width + frame.x,
      start.y * frame.height + frame.y,
      end.x * frame.width + frame.x,
      end.y * frame.height + frame.y
    );
    for (let i = 0; i < colors.length; i++) {
      grad.addColorStop(i / (colors.length - 1), colors[i]);
    }
    canvas.context.fillStyle = grad;
    canvas.context.fill();
  }
}
