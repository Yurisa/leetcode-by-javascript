/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function (num1, num2) {
  const m = num1.length;
  const n = num2.length;
  let str = '';
  const res = Array.from({ length: m + n }, () => 0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const mul = Number(num1[i]) * Number(num2[j]);
      const p1 = i + j;
      // p2代表小位
      const p2 = i + j + 1;
      let sum = res[p2] + mul;
      res[p2] = sum % 10;
      res[p1] += parseInt(sum / 10);
    }
  }
  let i = 0;
  while (i < res.length && res[i] === 0) {
    i++;
  }
  str = res.join('');
  str = str.substring(i);
  return str.length === 0 ? '0' : str;
};
// @lc code=end
