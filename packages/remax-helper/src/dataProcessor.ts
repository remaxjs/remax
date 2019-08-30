interface RawNode {
  id?: number;
  type: string;
  props?: any;
  children?: RawNode[];
  text?: string;
}

type VNodePath = Array<string | number>;

interface SpliceUpdate {
  path: VNodePath;
  start: number;
  deleteCount: number;
  items: RawNode[];
}

interface CompressedRawNode {
  i?: number; // id
  t: string; // type
  p?: any; // props
  c?: CompressedRawNode[]; // children
  te?: string; // text
}

interface CompressedSpliceUpdate {
  pa: string; // path
  s: number; // start
  d: number; // deleteCount
  i?: CompressedRawNode; // item
}

type CompressedPayload = CompressedSpliceUpdate[];

interface Action {
  type: 'splice'; // type: splice
  payload: any; // payload
}

function compressProps(props: any): any {
  if (!props) {
    return props;
  }

  const compressedProps: any = {};

  Object.keys(props).forEach(prop => {
    compressedProps[compressedKeyMap[prop]] = props[prop];
  });

  return compressedProps;
}

export function compressRawNode(node: RawNode): any {
  return [
    node.id,
    compressedKeyMap[node.type],
    isEmpty(node.props) ? '' : compressProps(node.props),
    isEmpty(node.children) ? '' : (node.children || []).map(compressRawNode),
    node.text || '',
  ];
  return {
    i: node.id,
    t: compressedKeyMap[node.type],
    p: isEmpty(node.props) ? undefined : compressProps(node.props),
    c: isEmpty(node.children)
      ? undefined
      : (node.children || []).map(compressRawNode),
    te: node.text,
  };
}

export function compressSpliceAction(updates: SpliceUpdate[]): Action {
  return {
    type: 'splice',
    payload: updates.map(update => [
      stringPath(update.path),
      update.start,
      update.deleteCount,
      update.items[0] ? compressRawNode(update.items[0]) : '',
    ]),
    //   ({
    //   pa: stringPath(update.path),
    //   s: update.start,
    //   d: update.deleteCount,
    //   ie: update.items[0] ? compressRawNode(update.items[0]) : undefined,
    // })),
  };
}

function isEmpty(value: any) {
  if (!value) {
    return true;
  }

  return Object.keys(value).length === 0;
}

function stringPath(path: VNodePath) {
  return path.map(p => compressedKeyMap[p] || p).join('.');
}

export const compressedKeyMap: {
  [key: string]: string;
} = {
  root: 'r',
  // RawNode
  id: 'i',
  type: 't',
  props: 'p',
  children: 'c',
  text: 'te',
  // SpliceUpdate
  path: 'pa',
  start: 's',
  deleteCount: 'd',
  item: 'ie',
  // props
  style: 'st',
  class: 'cl',
  bindtap: 'oc',
  src: 'sc',
  unitId: 'ui',
  mode: 'md',
  // type
  'plain-text': 'pt',
  view: 'v',
  button: 'b',
  image: 'im',
  ad: 'ad',
  'scroll-view': 'sv',
  canvas: 'ca',
  input: 'in',
  textarea: 'tx',
  form: 'fo',
  video: 'vi',
  'cover-view': 'cv',
  'cover-image': 'ci',
  'web-view': 'wv',
};
