/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let ans = '';
  let k = columnNumber;
  while (k > 0) {
    let tmp = Math.floor(k / 26);
    const code = k % 26 || 26;
    const c = String.fromCharCode(code + 64);
    ans = c + ans;
    k = k % 26 === 0 ? tmp - 1 : tmp;
  }
  return ans;
};
// @lc code=end
