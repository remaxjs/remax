import stopPropagation, { validate as validatePropagation, isPropagationStopped } from './stopPropagation';
import { SYNTHETIC_TYPES, DEPRECATED_CATCH_TYPE } from './constants';
import VNode from '../VNode';

function isSyntheticType(inputType: string) {
  if (DEPRECATED_CATCH_TYPE === inputType) {
    console.warn(
      'DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick'
    );
  }

  return !!SYNTHETIC_TYPES.find(type => type === inputType);
}

function createBaseSyntheticEvent(node: VNode, nativeEvent: any) {
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = () => {
    stopPropagation(node);
  };

  return nativeEvent;
}

export function createCallbackProxy(eventType: string, node: VNode, callback: (...params: any) => any) {
  if (!isSyntheticType(eventType)) {
    return callback;
  }

  return function (nativeEvent: any, ...restParams: any) {
    const syntheticEvent = createBaseSyntheticEvent(node, nativeEvent);

    if (isPropagationStopped) {
      validatePropagation(node);
      return;
    }

    return callback(syntheticEvent, ...restParams);
  };
}
