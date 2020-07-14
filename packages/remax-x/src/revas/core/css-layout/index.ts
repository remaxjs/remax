import { Node, Frame } from '../Node';
import { getMergedStyleFromNode } from '../utils';
import { AppContextType } from '../../components/Context';

const computeLayout = require('css-layout');

export interface YogaNode {
  node: Node;
  style: any;
  layout: any;
  children: YogaNode[];
}

function createYoga(node: Node): any {
  return {
    style: getMergedStyleFromNode(node),
    children: node.children.map(createYoga),
    node,
  };
}

function layout(yoga: YogaNode, x: number, y: number) {
  const { left, top, width, height } = yoga.layout;
  const { node, children } = yoga;
  node.frame = new Frame(x + left, y + top, width, height);
  node.props.onLayout && node.props.onLayout(node.frame);
  for (let i = 0; i < children.length; i++) {
    layout(children[i], node.frame.x, node.frame.y);
  }
}

export function updateLayout(root: Node<AppContextType>) {
  const yogas = createYoga(root);
  yogas.style = { width: root.props.clientWidth, height: root.props.clientHeight };
  return () => {
    computeLayout(yogas);
    layout(yogas, 0, 0);
  };
}
