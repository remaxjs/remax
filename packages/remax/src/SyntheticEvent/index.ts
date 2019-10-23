import SyntheticEventPool from './Pool';

const eventPool = new SyntheticEventPool();

function createBaseSyntheticEvent(
  eventType: string,
  eventId: string,
  nativeEvent: any
) {
  // 添加阻止冒泡方法
  nativeEvent.stopPropagation = () => {
    eventPool.stopPropagation(eventType, eventId);
  };

  return nativeEvent;
}

function isNewEvent(event: any) {
  if (event.target.targetDataset) {
    return event.target.dataset.rid === event.target.targetDataset.rid;
  }
  return event.currentTarget.dataset.rid === event.target.dataset.rid;
}

function getEventId(event: any) {
  if (!event.target) {
    return;
  }

  if (event.target.targetDataset && event.target.targetDataset.rid) {
    return event.target.targetDataset.rid;
  }

  if (event.target.dataset && event.target.dataset.rid) {
    return event.target.dataset.rid;
  }
}

export function createCallbackProxy(
  eventType: string,
  callback: (...params: any) => any
) {
  if (!SyntheticEventPool.isSyntheticType(eventType)) {
    return callback;
  }

  return function(nativeEvent: any, ...restParams: any) {
    const eventId = getEventId(nativeEvent);

    if (!eventId) {
      return callback(nativeEvent, ...restParams);
    }

    const syntheticEvent = createBaseSyntheticEvent(
      eventType,
      eventId,
      nativeEvent
    );

    if (isNewEvent(nativeEvent)) {
      // 新的事件流，初始化 store 数据
      eventPool.initialEventState(eventType, eventId);
    }

    if (eventPool.isPropagationStopped(eventType, eventId)) {
      return;
    }

    return callback(syntheticEvent, ...restParams);
  };
}
