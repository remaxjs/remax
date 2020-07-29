export interface EventTarget {
  /** 元素 ID */
  id: string;
  /** 左偏移量 */
  offsetLeft: number;
  /** 顶部偏移量 */
  offsetTop: number;
  /** data 对象 */
  dataset: {
    [key: string]: any;
  };
  value: any;
}

export interface EventCurrentTarget {
  /** 元素 ID */
  id?: string;
  /** 左偏移量 */
  offsetLeft: number;
  /** 顶部偏移量 */
  offsetTop: number;
  /** data 对象 */
  dataset: {
    [key: string]: any;
  };
}

export interface Touch {
  /** 触点相对于可见视区左边沿的的X坐标. 不包括任何滚动偏移 */
  clientX: number;
  /** 触点相对于可见视区上边沿的的Y坐标. 不包括任何滚动偏移 */
  clientY: number;
  /** 触点相对于页面左边沿的的X坐标. 当存在水平滚动的偏移时, 这个值包含了水平滚动的偏移 */
  pageX: number;
  /** 触点相对于页面上边沿的的Y坐标. 当存在垂直滚动的偏移时, 这个值包含了垂直滚动的偏移 */
  pageY: number;
  /** 一次触摸动作(我们指的是手指的触摸)在平面上移动的整个过程中, 该标识符不变. 可以根据它来判断跟踪的是否是同一次触摸过程 */
  identifier: number;
}

export interface Event {
  target: EventTarget;
  currentTarget: EventCurrentTarget;
  type: string;
  // 已废弃
  originalEvent: any;
  nativeEvent: any;
}

export interface TouchEvent extends Event {
  /** 阻止事件冒泡 */
  stopPropagation: () => void;
  /** 包含了所有当前接触触摸平面的触点的 Touch 对象，无论它们的起始于哪个 element 上，也无论它们状态是否发生了变化 */
  touches: Touch[];
  /** 包含了代表所有从上一次触摸事件到此次事件过程中，状态发生了改变的触点的 Touch 对象。 */
  changedTouches: Touch[];
}

export type TouchStartEvent = TouchEvent;
export type TouchMoveEvent = TouchEvent;
export type TouchEndEvent = TouchEvent;
export type TouchCancelEvent = TouchEvent;

export type ImageLoadEvent = Event;
export type ImageErrorEvent = Event;

export interface TapEvent extends Event {
  /** 阻止事件冒泡 */
  stopPropagation: () => void;
}

export type InputEvent = Event;
export type FormEvent = Event;
