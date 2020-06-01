/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (!s) return 0;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ret = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const nextChar = s.charAt(i + 1);
    const num = map[char];
    const nextNum = map[nextChar] || 0;
    if (num >= nextNum) {
      ret += num;
      if (i === s.length - 1) {
        ret += nextNum;
      }
    } else {
      ret += nextNum - num;
      i++;
    }
  }
  return ret;
};
