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

interface Payload {
  path: string;
  start: number;
  deleteCount: number;
  item?: RawNode;
}

interface Action {
  type: 'splice';
  payload: Payload[];
}

interface ComporessedRawNode {
  i?: number;
  t: string;
  p?: any;
  c?: RawNode;
  te?: string;
}

interface CompressedPayload {
  p: string;
  s: number;
  d: number;
  i?: ComporessedRawNode;
}

interface CompressedAction {
  t: 's';
  p: CompressedPayload[];
}

export function compressProps(props: any): any {
  // 压缩 props
}

export function compressSpliceAction(
  updates: SpliceUpdate[]
): CompressedAction {
  // 压缩
}

export function decompression(compressedAction: CompressedAction): Action {
  // 解压
}
