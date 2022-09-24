/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 0 || n < 0) return false;
  while (n > 1) {
    if (n & (1 === 1)) return false;
    n = n >> 1;
  }

  return true;
};
// @lc code=end
