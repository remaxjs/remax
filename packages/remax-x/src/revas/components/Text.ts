import * as React from 'react';
import { drawText, measureText, applyTextStyle, DrawTextOptions, DEFAULT_MEASURE } from './common/drawText';
import { NodeProps, Node } from '../core/Node';
import { getFrameFromNode, flatten, applyAnimated } from '../core/utils';
import { RevasCanvas } from '../core/Canvas';

export type TextProps = {
  numberOfLines?: number;
} & NodeProps;

export default class Text extends React.Component<TextProps> {
  state = { height: 0 };

  _measured = DEFAULT_MEASURE;

  _drawed?: DrawTextOptions;

  drawText = (canvas: RevasCanvas, node: Node) => {
    const content = getTextFromNode(node);
    if (content) {
      const options = {
        numberOfLines: node.props.numberOfLines || 0,
        textStyle: getTextStyleFromNode(node),
        frame: getFrameFromNode(node),
        content,
      };
      applyTextStyle(canvas, options);
      if (textPropsChanged(options, this._drawed)) {
        this._measured = measureText(canvas, options);
        this._drawed = options;
      }
      const [lines, height] = this._measured;
      if (height !== this.state.height) {
        this.setState({ height });
      } else {
        drawText(canvas, options, lines);
      }
    }
  };
  render() {
    const { children, numberOfLines, ...others } = this.props as any;
    return React.createElement(
      'View',
      others,
      React.createElement('Text', {
        content: children,
        customDrawer: this.drawText,
        textStyle: others.style,
        style: this.state,
        numberOfLines,
        $ready: Boolean(this._drawed),
      })
    );
  }
}

const TEXT_STYLES_LIST = [
  'fontStyle',
  'fontWeight',
  'fontSize',
  'fontFamily',
  'textBaseline',
  'wordBreak',
  'lineHeight',
];

const DEFAULT_TEXTSTYLE = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
  fontWeight: 'normal',
  fontSize: 14,
  color: '#000',
  fontStyle: 'normal',
  textBaseline: 'middle',
};

function textStyleChanged(left: any, right: any) {
  for (let i = 0; i < TEXT_STYLES_LIST.length; i++) {
    const item = TEXT_STYLES_LIST[i];
    if (left[item] !== right[item]) {
      return true;
    }
  }
  return false;
}

function textPropsChanged(left: DrawTextOptions, right?: DrawTextOptions) {
  if (!right) {
    return true;
  }
  if (left.content !== right.content) {
    return true;
  }
  if (left.numberOfLines !== right.numberOfLines) {
    return true;
  }
  if (left.frame.width !== right.frame.width) {
    return true;
  }
  return textStyleChanged(left.textStyle, right.textStyle);
}

function getTextFromNode(node: Node) {
  const frame = getFrameFromNode(node);
  if (frame.width > 0) {
    const { content } = node.props;
    if (typeof content === 'string') {
      return content;
    } else if (Array.isArray(content)) {
      return content.join('');
    }
  }
  return '';
}

function getTextStyleFromNode(node: Node) {
  const style = Object.assign({}, DEFAULT_TEXTSTYLE, ...flatten([node.props.textStyle]));
  style.lineHeight = style.lineHeight || style.fontSize * 1.1;
  return applyAnimated(style);
}
// TODO: nested text support
