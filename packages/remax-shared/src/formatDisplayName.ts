export function formatDisplayName(name: string) {
  return name
    .replace(/-(.)/g, $1 => {
      return $1.toUpperCase();
    })
    .replace(/-/g, '')
    .replace(/^(.)/, $1 => {
      return $1.toUpperCase();
    });
}
