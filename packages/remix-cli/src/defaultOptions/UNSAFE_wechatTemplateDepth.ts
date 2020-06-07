const UNSAFE_wechatTemplateDepth = {
  ad: 1,
  audio: 1,
  button: 1,
  camera: 1,
  canvas: 1,
  checkbox: 1,
  'checkbox-group': 1,
  'cover-image': 1,
  'cover-view': 20,
  editor: 1,
  form: 5,
  'functional-page-navigator': 1,
  icon: 2,
  image: 1,
  input: 1,
  label: 5,
  'live-player': 1,
  'live-pusher': 1,
  map: 1,
  'moveable-area': 5,
  'moveable-view': 5,
  navigator: 1,
  'official-account': 1,
  'open-data': 1,
  picker: 1,
  'picker-view': 1,
  'picker-view-column': 1,
  progress: 1,
  radio: 1,
  'radio-group': 1,
  'rich-text': 1,
  'scroll-view': 5,
  slider: 1,
  swiper: 1,
  text: 5,
  textarea: 1,
  video: 1,
  view: 20,
  'web-view': 1,
};

export function ensureDepth(depth: number | { [key: string]: number }) {
  const obj: any = {};
  if (typeof depth === 'number') {
    Object.keys(UNSAFE_wechatTemplateDepth).forEach(key => {
      obj[key] = depth;
    });

    return obj;
  }

  return {
    ...UNSAFE_wechatTemplateDepth,
    ...depth,
  };
}

export default UNSAFE_wechatTemplateDepth;
