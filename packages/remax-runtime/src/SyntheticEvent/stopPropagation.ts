import VNode from '../VNode';
import { SYNTHETIC_TYPES } from './constants';

export const isPropagationStopped: {
  [key: string]: boolean;
} = {};

SYNTHETIC_TYPES.forEach(type => {
  isPropagationStopped[type] = false;
});

/**
 * 检查父元素里还有没有点击事件
 *
 * @export
 * @param {VNode} node
 * @returns
 */
export function validate(node: VNode, eventType: string) {
  const parent = node.parent;

  if (!parent) {
    isPropagationStopped[eventType] = false;
    return;
  }

  if (parent.props?.[eventType]) {
    return;
  }

  validate(parent, eventType);
}

export default function stopPropagation(node: VNode, eventType: string) {
  isPropagationStopped[eventType] = true;

  validate(node, eventType);
}
