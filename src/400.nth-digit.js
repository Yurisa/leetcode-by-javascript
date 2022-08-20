/*
 * @lc app=leetcode id=400 lang=javascript
 *
 * [400] Nth Digit
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  let len = 1;
  while (n > 9 * len * Math.pow(10, len - 1)) {
    // 一个几个数字
    n -= 9 * len * Math.pow(10, len - 1);
    len++;
  }
  let index = n - 1;
  let start = Math.pow(10, len - 1);
  let num = start + Math.floor(index / len);
  return Number((num + "")[index % len]);
};
// @lc code=end
