import * as React from 'react';
import { RevasCanvas, Container, render, RevasTouch, RevasTouchEvent } from './revas';

export function initTouch(dom: HTMLElement, handler: (e: any) => any) {
  dom.addEventListener('touchstart', handler, false);
  dom.addEventListener('touchmove', handler, false);
  dom.addEventListener('touchend', handler, false);
  dom.addEventListener('touchcancel', handler, false);
  return () => {
    dom.removeEventListener('touchstart', handler, false);
    dom.removeEventListener('touchmove', handler, false);
    dom.removeEventListener('touchend', handler, false);
    dom.removeEventListener('touchcancel', handler, false);
  };
}

function getNodePosition(node: any): [number, number] {
  let top = 0;
  let left = 0;

  while (node) {
    top += node.offsetTop;
    left += node.offsetLeft;
    node = node.offsetParent;
  }
  return [top, left];
}

function createRevasTouchEvent(e: TouchEvent): RevasTouchEvent {
  const touches: { [key: number]: RevasTouch } = {};
  const type: any = e.type === 'touchcancel' ? 'touchend' : e.type;
  Object.keys(e.changedTouches).forEach((key: any) => {
    const touch = e.changedTouches[key];
    if (touch && touch.target) {
      const [offsetTop, offsetLeft] = getNodePosition(touch.target);
      touches[touch.identifier] = {
        identifier: touch.identifier,
        x: touch.clientX - offsetLeft,
        y: touch.clientY - offsetTop,
      };
    }
  });
  return { type, touches, timestamp: e.timeStamp || Date.now() };
}

export function createPageConfig(Page: React.ComponentType<any>) {
  console.log(JSON.stringify(Page));
  return {
    onReady(this: any) {
      console.log('on ready');
      const { pixelRatio: scale, screenWidth: width, screenHeight: height } = my.getSystemInfoSync();
      // wx.createSelectorQuery()
      //   .select('#remax-canvas')
      //   .fields({
      //     node: true,
      //     size: true,
      //   })
      //   .exec((res: any) => {
      //     console.log(res);
      //     const c = res[0].node;
      //     const ctx = c.getContext('2d');
      const ctx: any = my.createCanvasContext('#remax-canvas');
      const canvas = new RevasCanvas(ctx);
      this.container = new Container(canvas);
      //     // canvas.transform.scale(scale, scale);
      //     c.width = res[0].width * scale;
      //     c.height = res[0].height * scale;
      //     ctx.scale(scale, scale);
      render(React.createElement(Page), this.container, { width, height, scale });
      // });
    },

    handleTouch(this: any, e: any) {
      this.container.handleTouch(createRevasTouchEvent(e));
    },
  };
}
