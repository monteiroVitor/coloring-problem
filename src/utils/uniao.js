export function uniao(setA, setB) {
  var _uniao = new Set(setA);
  for (var elem of setB) {
    _uniao.add(elem);
  }
  return _uniao;
}
