export default function(list) {
  return list.sort(function(a, b) {
    return a.order - b.order;
  });
}
