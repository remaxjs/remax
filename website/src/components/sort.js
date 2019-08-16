export default function(list) {
  return list.sort(function(a, b) {
    if (a.order < b.order) return -1;
    if (a.order > b.order) return 1;
    return 0;
  });
}
