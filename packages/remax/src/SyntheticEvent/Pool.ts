export default class SyntheticEventPool {
  public static DEPRECATED_CATCH_TYPE = 'catchClick';
  public static SYNTHETIC_TYPES = ['onClick'];

  public static isSyntheticType(inputType: string) {
    if (this.DEPRECATED_CATCH_TYPE === inputType) {
      console.warn(
        'DEPRECATION: remax 已支持在 onClick 事件中使用 stopPropagation 阻止事件冒泡，请尽量不要使用 catchClick'
      );
    }

    return !!this.SYNTHETIC_TYPES.find(type => type === inputType);
  }

  constructor() {
    this.state = {};

    SyntheticEventPool.SYNTHETIC_TYPES.forEach(type =>
      this.initialEventState(type)
    );
  }

  public initialEventState(
    eventType: string,
    eventId?: string,
    currentEventID?: string
  ) {
    if (!this.state[eventType]) {
      this.state[eventType] = {};
    }

    if (eventId && currentEventID) {
      this.state[eventType] = {
        [eventId]: {
          propagationStopped: false,
          currentEventId: currentEventID,
        },
      };
    }
  }

  public setLatestEvent(
    eventType: string,
    eventId: string,
    currentEventId: string
  ) {
    if (this.state[eventType] && this.state[eventType][eventId]) {
      this.state[eventType][eventId].currentEventId = currentEventId;
    }
  }

  public getLatestEvent(eventType: string, eventId: string) {
    if (this.state[eventType] && this.state[eventType][eventId]) {
      return this.state[eventType][eventId].currentEventId;
    }
  }

  public stopPropagation(eventType: string, eventId: string) {
    if (!this.state[eventType] || !this.state[eventType][eventId]) {
      return;
    }

    this.state[eventType][eventId].propagationStopped = true;
  }

  public isPropagationStopped(eventType: string, eventId: string) {
    return this.state?.[eventType]?.[eventId]?.propagationStopped;
  }

  private state: {
    [eventType: string]: {
      [eventId: string]: {
        propagationStopped: boolean;
        currentEventId: string;
      };
    };
  };
}
