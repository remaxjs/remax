import * as React from 'react';
import { RevasScrollEvent } from './common/Scroller';
import ScrollView, { ScrollViewProps } from './ScrollView';
import { Frame } from '../core/Node';

export type ListViewProps<T = any> = {
  data: T[];
  renderItem: (item: T, index: number, data: T[]) => React.ReactNode;
  itemHeight: number;
} & ScrollViewProps;

export default class ListView extends React.Component<ListViewProps<any>> {
  state = {
    start: 0,
    end: 1,
  };

  private _height = 0;

  componentDidMount() {
    this.checkVisible(0);
  }

  private checkVisible = (y: number) => {
    if (this._height > 0) {
      const { itemHeight } = this.props;
      const { start: _start, end: _end } = this.state;
      const start = Math.max(0, Math.floor((y - 10) / itemHeight));
      const end = Math.floor((y + this._height + 10) / itemHeight);
      if (start !== _start || end !== _end) {
        this.setState({ start, end });
      }
    }
  };

  private _onScroll = (e: RevasScrollEvent) => {
    this.checkVisible(e.y);
    this.props.onScroll && this.props.onScroll(e);
  };

  private _onLayout = (frame: Frame) => {
    if (this._height !== frame.height) {
      this._height = frame.height;
    }
    // this._width = frame.width
  };

  renderItem = (item: any, i: number) => {
    const { data, renderItem } = this.props;
    const index = i + this.state.start;
    return React.createElement(React.Fragment, { key: index }, renderItem(item, index, data));
  };

  render() {
    const { data, itemHeight } = this.props;
    const { start, end } = this.state;
    // console.log(start, end, this._height);
    return React.createElement(
      ScrollView,
      {
        ...this.props,
        onScroll: this._onScroll,
        onLayout: this._onLayout,
        offset: { y: start * itemHeight },
      },
      data.slice(start, end + 1).map(this.renderItem)
    );
  }
}
