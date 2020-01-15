import * as React from 'react';
import {
  TapEvent,
  TouchEvent,
  EventTarget,
  EventCurrentTarget,
  ImageLoadEvent,
  ImageErrorEvent,
  InputEvent,
  FormEvent,
} from './types';

export function createTarget(target: any, detail: any): EventTarget {
  return {
    id: target.id,
    offsetLeft: target.offsetLeft,
    offsetTop: target.offsetTop,
    dataset: target.targetDataset || target.dataset,
    value: detail?.value,
  };
}

export function createCurrentTarget(currentTarget: any): EventCurrentTarget {
  return {
    offsetLeft: currentTarget.offsetLeft,
    offsetTop: currentTarget.offsetTop,
    dataset: currentTarget.dataset,
  };
}

export const createTapEvent = (originalEvent: any): TapEvent => ({
  type: originalEvent.type,
  stopPropagation: originalEvent.stopPropagation,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
});

export const createTouchEvent = (originalEvent: any): TouchEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  touches: originalEvent.touches,
  changedTouches: originalEvent.touches,
  originalEvent,
});

export const createImageEvent = (originalEvent: any): ImageLoadEvent | ImageErrorEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
});

export function createCallback(fn: Function | undefined, eventCreator: Function) {
  if (typeof fn !== 'function') {
    return undefined;
  }

  return (originalEvent: any) => fn(eventCreator(originalEvent));
}

export const createInputEvent = (originalEvent: any): InputEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
});

export const createFormEvent = (originalEvent: any): FormEvent => ({
  type: originalEvent.type,
  target: createTarget(originalEvent.target, originalEvent.detail),
  currentTarget: createCurrentTarget(originalEvent.currentTarget),
  originalEvent,
});

export default function createHostComponent<P = any>(name: string) {
  const Component: React.ForwardRefRenderFunction<any, P> = (props: any, ref: React.Ref<any>) => {
    const inputProps = {
      ...props,
      onLongTap: createCallback(props.onLongTap, createTapEvent),
      onTap: createCallback(props.onTap, createTapEvent),
      onTouchStart: createCallback(props.onTouchStart, createTouchEvent),
      onTouchMove: createCallback(props.onTouchMove, createTouchEvent),
      onTouchEnd: createCallback(props.onTouchEnd, createTouchEvent),
      onTouchCancel: createCallback(props.onTouchCancel, createTouchEvent),
      onChange: createCallback(props.onChange, createInputEvent),
      onInput: createCallback(props.onInput, createInputEvent),
      onConfirm: createCallback(props.onConfirm, createInputEvent),
      onFocus: createCallback(props.onFocus, createInputEvent),
      onBlur: createCallback(props.onBlur, createInputEvent),
      onSubmit: createCallback(props.onSubmit, createFormEvent),
      onReset: createCallback(props.onReset, createFormEvent),
    };

    if (name === 'image') {
      inputProps.onLoad = createCallback(props.onLoad, createImageEvent);
      inputProps.onError = createCallback(props.onError, createImageEvent);
    }

    return React.createElement(name, { ...inputProps, ref });
  };
  return React.forwardRef<any, React.PropsWithChildren<P>>(Component);
}
