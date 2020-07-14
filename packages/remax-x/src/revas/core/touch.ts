import { getFrameFromNode, getMergedStyleFromNode, sortByZIndexAscending } from "./utils"
import { Node, RevasTouchEvent, RevasTouchType, RevasTouch } from "./Node"

function scaled(x: number, c: number, s = 1) {
  if (!s && s === 1) return x
  return ((s - 1) * c + x) / s
}

function findNodeByPoint(node: Node, x: number, y: number): Node | void {
  if (node.props.pointerEvents === 'none') return

  const children = node.children.slice().sort(sortByZIndexAscending).reverse()
  const style = getMergedStyleFromNode(node)
  const frame = getFrameFromNode(node)

  // tranlate
  const scaleX = style.scaleX || style.scale
  const scaleY = style.scaleY || style.scale
  const originX = frame.width / 2 + frame.x
  const originY = frame.height / 2 + frame.y

  x -= style.translateX || 0
  y -= style.translateY || 0
  x = scaled(x, originX, scaleX)
  y = scaled(y, originY, scaleY)

  if (frame.x < x && frame.y < y
    && x <= frame.x + frame.width
    && y <= frame.y + frame.height) {

    for (let i = 0; i < children.length; i++) {
      const target = findNodeByPoint(children[i], x, y)
      if (target) return target
    }

    if (node.props.pointerEvents === 'box-none') return

    return node
  }
}

const eventNodeHolder: { [key: number]: Node } = {}

export function getNodeByTouch(root: Node, type: RevasTouchType, touch: RevasTouch) {
  if (type === 'touchstart') {
    const target = findNodeByPoint(root, touch.x, touch.y)
    eventNodeHolder[touch.identifier] = target || root
    return eventNodeHolder[touch.identifier]
  } else if (type === 'touchmove') {
    return eventNodeHolder[touch.identifier] || root
  } else if (type === 'touchend') {
    const target = eventNodeHolder[touch.identifier]
    delete eventNodeHolder[touch.identifier]
    return target || root
  }
  return root
}

const LISTENER_MAP = {
  touchstart: 'onTouchStart',
  touchmove: 'onTouchMove',
  touchend: 'onTouchEnd'
}


export function emitTouch(node: Node | void, e: RevasTouchEvent) {
  const funcName = LISTENER_MAP[e.type]
  if (funcName) {
    while (node) {
      if (node.props[funcName]
        && node.props.pointerEvents !== 'box-none'
        && node.props[funcName](e) === false) return
      node = node.parent
    }
  }
}