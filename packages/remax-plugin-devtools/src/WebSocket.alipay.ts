import global from './global';

enum ReadyState {
  CONNECTING,
  OPEN,
  CLOSING,
  CLOSED,
}

export default class WebSocket {
  readyState: ReadyState;
  CONNECTING = ReadyState.CONNECTING;
  OPEN = ReadyState.OPEN;
  CLOSING = ReadyState.CLOSING;
  CLOSED = ReadyState.CLOSED;
  onopen?: any;
  onerror?: any;
  onclose?: any;
  onmessage?: any;

  constructor(url: string) {
    this.readyState = ReadyState.CONNECTING;

    global.connectSocket({
      url,
    });

    global.onSocketOpen(() => {
      this.readyState = ReadyState.OPEN;
      if (typeof this.onopen === 'function') {
        this.onopen();
      }
    });

    global.onSocketError((res: any) => {
      if (typeof this.onerror === 'function') {
        this.onerror(res);
      }
    });

    global.onSocketClose(() => {
      this.readyState = ReadyState.CLOSED;
      if (typeof this.onclose === 'function') {
        this.onclose();
      }
    });

    global.onSocketMessage((res: any) => {
      if (typeof this.onmessage === 'function') {
        this.onmessage(res);
      }
    });
  }

  send(payload: any) {
    global.sendSocketMessage({
      data: payload,
    });
  }
}
