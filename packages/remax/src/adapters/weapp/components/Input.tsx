import React from 'react';
import propsAlias from './propsAlias';

export interface InputProps {
  autoFocus?: boolean;
  className?: string;
  maxlength?: number;
  focus?: boolean;
  onInput?: (...params: any) => void;
  onClick?: (...params: any) => void;
  onFocus?: (...params: any) => void;
}

interface State {
  focus: boolean;
}

export default class Input extends React.Component<InputProps, State> {
  public static defaultProps = {
    maxlength: -1
  };

  public static getDerivedStateFromProps(props: InputProps, state: State) {
    // autoFocus 有值，并且 Input 未被 focus 过
    if (props.autoFocus !== undefined && state.focus !== true) {
      return {
        focus: props.autoFocus
      };
    }

    return null;
  }

  public state = {
    focus: false
  };

  public render() {
    const {
      children,
      focus,
      onInput,
      onClick,
      onFocus,
      ...restProps
    } = this.props;
    const inputProps = propsAlias({
      ...restProps,
      focus: this.focus,
      bindinput: this.handleInnerFocus(onInput),
      bindtap: this.handleInnerFocus(onClick),
      bindfocus: this.handleInnerFocus(onFocus)
    });

    return React.createElement('input', inputProps, children);
  }

  private get focus() {
    const { focus } = this.props;

    if (focus !== undefined) {
      return focus;
    }

    return this.state.focus;
  }

  private handleInnerFocus = (func?: Function) => (...params: any) => {
    if (!this.state.focus) {
      this.setState({ focus: true });
    }

    if (typeof func === 'function') {
      return func(...params);
    }
  };
}
