import JSXExpressionContainer from './JSXExpressionContainer';
import JSXElement from './JSXElement';

/**
 * 预处理 JSX 中的一些逻辑，方便后续收集静态模板和处理数据结构
 *
 * @export
 * @returns
 */
export default function preprocess() {
  return {
    visitor: {
      JSXExpressionContainer,
      JSXElement,
    },
  };
}
