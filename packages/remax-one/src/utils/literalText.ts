const cache: any = {};

export function getLiteralText(text: string) {
  if (cache[text]) {
    return cache[text];
  }

  const el = document.createElement('div');
  el.innerHTML = text;
  cache[text] = el.textContent;

  return cache[text];
}

const keys = ['&nbsp;', '&lt;', '&gt;', '&amp;', '&apos;', '&ensp;', '&emsp;'];

const replaceEncodeReg = new RegExp(keys.join('|'), 'g');

export function decode(str: string) {
  return str.replace(replaceEncodeReg, m => getLiteralText(m));
}
