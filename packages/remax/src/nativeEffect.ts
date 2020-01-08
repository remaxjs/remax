export type Listener = Function;

interface ListenerConfig {
  listener: Listener;
  once: boolean;
}

interface NativeEffector {
  listenerConfigs: ListenerConfig[];
}

const effector: NativeEffector = {
  listenerConfigs: [],
};

function dispose(listener: Listener) {
  effector.listenerConfigs = effector.listenerConfigs.filter(
    config => config.listener !== listener
  );
}

function connect(listener: Listener, once: boolean) {
  effector.listenerConfigs.push({ listener, once });

  return () => dispose(listener);
}

function run() {
  effector.listenerConfigs.forEach(config => {
    config.listener();

    if (config.once) {
      dispose(config.listener);
    }
  });
}

export default {
  connect,
  run,
  dispose,
};
