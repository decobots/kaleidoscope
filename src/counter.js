export function* Counter() {
  let count = 0;
  while (true) {
    yield count++;
  }
}


export function* Degree() {
  let degree = 0;
  while (true) {
    if (degree > 360) {
      degree = 0;
    }
    yield degree;
    degree += 60;
  }
}
