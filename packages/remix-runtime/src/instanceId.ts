let instanceId = 0;

export function reset() {
  instanceId = 0;
}

export function generate() {
  const id = instanceId;
  instanceId += 1;
  return id;
}
