export function* Counter() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

export function toArray(i) {
  let arr = [];
  while (i--) {
    arr.push(i);
  }
  return arr;
}
