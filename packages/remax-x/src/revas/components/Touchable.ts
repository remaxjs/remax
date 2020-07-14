import * as React from 'react';
import { BaseProps, RevasTouchEvent, RevasTouch } from '../core/Node';
import { AnimatedValue } from '../core/Animated';

export type TouchableProps = {
  onPress: Function;
  onPressIn?: Function;
  onPressOut?: Function;
  activeOpacity?: number;
} & BaseProps;

export default class Touchable extends React.Component<TouchableProps> {
  static defaultProps = {
    activeOpacity: 0.7,
  };

  _style = {
    opacity: new AnimatedValue(1),
    animated: true,
  };

  private _start?: RevasTouch;
  private _tid = '';

  private _onTouchStart = (e: RevasTouchEvent) => {
    this._tid = Object.keys(e.touches)[0];
    this._start = e.touches[this._tid];
    this._style.opacity.setValue(this.props.activeOpacity!);
    this.props.onPressIn && this.props.onPressIn();
  };

  private _onTouchEnd = (e: RevasTouchEvent) => {
    if (this._start && e.touches[this._tid]) {
      if (
        Math.abs(this._start.x - e.touches[this._tid].x) < 3 &&
        Math.abs(this._start.y - e.touches[this._tid].y) < 3
      ) {
        this.props.onPress && this.props.onPress();
      }
    }
    this._style.opacity.setValue(1);
    this.props.onPressOut && this.props.onPressOut();
  };

  render() {
    return React.createElement('Touchable', {
      onTouchStart: this._onTouchStart,
      onTouchEnd: this._onTouchEnd,
      ...this.props,
      style: [this.props.style, this._style],
    });
  }
}
