import msg from './msg.sjs';
require('./msg.sjs');

function hello() {
  return msg.text;
}

export default {
  hello,
};
