import msg from './msg.sjs';

function hello() {
  return msg.text;
}

export default {
  hello,
};
