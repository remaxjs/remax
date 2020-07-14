import { ReactNode } from 'react';

export class Frame {
  constructor(public x = 0, public y = 0, public width = 0, public height = 0) {}
}

export class Node<T = any> {
  public readonly children: Node[] = [];
  public frame = new Frame();
  public parent?: Node;
  constructor(public readonly type: string, public props: NodeProps & T) {}
  get $ready() {
    if (this.props.$ready === false) {
      return false;
    }
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      if (child.$ready === false) {
        return false;
      }
    }
    return true;
  }
}

export interface RevasTouch {
  identifier: number;
  x: number;
  y: number;
}

export type RevasTouchType = 'touchstart' | 'touchmove' | 'touchend';

export interface RevasTouchEvent {
  type: RevasTouchType;
  touches: { [key: string]: RevasTouch };
  timestamp: number;
  [key: string]: any;
}

export type RevasTouchEventListener = (event: RevasTouchEvent) => any;

export interface BaseProps {
  children?: ReactNode;
  style?: any | any[];
  cache?: string | boolean;
  forceCache?: boolean;
}

export interface NodeProps extends BaseProps {
  onTouchStart?: RevasTouchEventListener;
  onTouchMove?: RevasTouchEventListener;
  onTouchEnd?: RevasTouchEventListener;
  onLayout?: (frame: Frame) => any;
  pointerEvents?: 'auto' | 'none' | 'box-none';
  $ready?: boolean;
}
