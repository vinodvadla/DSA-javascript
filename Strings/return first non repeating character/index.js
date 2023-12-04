function firstNonRepeating(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
      delete map[str[i]];
    } else {
      map[str[i]] = i;
    }
  }
  let ans = -1;
  for (let key in map) {
    if (ans == -1 && map[key] > ans) {
      ans = map[key];
    }
    if (ans !== -1 && map[key] < ans) {
      ans = map[key];
    }
  }
  return ans;
}

console.log(firstNonRepeating("aabb"));
