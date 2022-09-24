/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let y = parseInt(x.toString().split("").reverse().join(""));
  if (x < 0) y = -y;
  return y < -Math.pow(2, 31) || y > Math.pow(2, 31) ? 0 : y;
};
// @lc code=end
