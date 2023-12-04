function findC(c) {
  let a = Math.floor(Math.sqrt(c));
  let b = 0;

  while (b < a) {
    let ans = a * a + b * b;
    if (ans === c) {
      return true;
    }
    if (ans > c) {
      a--;
    } else {
      b++;
    }
  }
  return false;
}
console.log(findC(1000))
