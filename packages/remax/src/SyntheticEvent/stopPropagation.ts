import VNode from '../VNode';
import { SYNTHETIC_TYPES } from './constants';

export let isPropagationStopped = false;

/**
 * 检查父元素里还有没有点击事件
 *
 * @export
 * @param {VNode} node
 * @returns
 */
export function validate(node: VNode) {
  const parent = node.parent;

  if (!parent) {
    isPropagationStopped = false;
    return;
  }

  for (let i = 0; i < SYNTHETIC_TYPES.length; i++) {
    if (parent.props?.[SYNTHETIC_TYPES[i]]) {
      return;
    }
  }

  validate(parent);
}

export default function stopPropagation(node: VNode) {
  isPropagationStopped = true;

  validate(node);
}
