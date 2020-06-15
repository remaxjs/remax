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
  ws: any;

  constructor(url: string) {
    this.readyState = ReadyState.CONNECTING;

    this.ws = global.connectSocket({
      url,
    });

    this.ws.onOpen(() => {
      this.readyState = ReadyState.OPEN;
      if (typeof this.onopen === 'function') {
        this.onopen();
      }
    });

    this.ws.onError((res: any) => {
      if (typeof this.onerror === 'function') {
        this.onerror(res);
      }
    });

    this.ws.onClose(() => {
      this.readyState = ReadyState.CLOSED;
      if (typeof this.onclose === 'function') {
        this.onclose();
      }
    });

    this.ws.onMessage((res: any) => {
      if (typeof this.onmessage === 'function') {
        this.onmessage(res);
      }
    });
  }

  send(payload: any) {
    this.ws.send({
      data: payload,
    });
  }
}
