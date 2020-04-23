let actionId = 0;

export function reset() {
  actionId = 0;
}

export function generate() {
  const id = actionId;
  actionId += 1;
  return id;
}
