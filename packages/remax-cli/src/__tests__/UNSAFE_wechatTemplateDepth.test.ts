import { ensureDepth } from '../defaultOptions/UNSAFE_wechatTemplateDepth';

describe('UNSAFE_wechatTemplateDepth', () => {
  it('ensure depth when input number', () => {
    expect(ensureDepth(20)).toMatchInlineSnapshot(`
      Object {
        "ad": 20,
        "audio": 20,
        "button": 20,
        "camera": 20,
        "canvas": 20,
        "checkbox": 20,
        "checkbox-group": 20,
        "cover-image": 20,
        "cover-view": 20,
        "editor": 20,
        "form": 20,
        "functional-page-navigator": 20,
        "icon": 20,
        "image": 20,
        "input": 20,
        "label": 20,
        "live-player": 20,
        "live-pusher": 20,
        "map": 20,
        "moveable-area": 20,
        "moveable-view": 20,
        "navigator": 20,
        "official-account": 20,
        "open-data": 20,
        "picker": 20,
        "picker-view": 20,
        "picker-view-column": 20,
        "progress": 20,
        "radio": 20,
        "radio-group": 20,
        "rich-text": 20,
        "scroll-view": 20,
        "slider": 20,
        "swiper": 20,
        "text": 20,
        "textarea": 20,
        "video": 20,
        "view": 20,
        "web-view": 20,
      }
    `);
  });
});
