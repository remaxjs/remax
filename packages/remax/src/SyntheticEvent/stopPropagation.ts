import VNode from '../VNode';

export let isPropagationStopped = false;

export function validate(node: VNode) {
  const parent = node.parent;

  if (!parent) {
    isPropagationStopped = false;
    return;
  }

  if (parent.props?.onClick) {
    return;
  }

  validate(parent);
}

export default function stopPropagation(node: VNode) {
  isPropagationStopped = true;

  validate(node);
}
