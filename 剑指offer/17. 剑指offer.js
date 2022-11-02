/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const max = Math.pow(10, n);
  const res = [];
  for (let i = 1; i < max; i++) {
    res.push(i);
  }
  return res;
};

/**
 * 大数解法 全排列
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  const res = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 9; j++) {
      // i代表前面的位
      backtrack(j.toString(), i);
    }
  }

  function backtrack(str, len) {
    if (str.length === len) {
      res.push(str * 1);
      return;
    }

    if (str.length > len) {
      return;
    }

    for (let i = 0; i <= 9; i++) {
      str += i;
      backtrack(str, len);
      str = str.substring(0, str.length - 1);
    }
  }
  return res;
};
