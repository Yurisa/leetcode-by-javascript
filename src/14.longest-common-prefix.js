/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let n = Number.MAX_VALUE;
  let ans = "";
  for (const str of strs) {
    n = Math.min(n, str.length);
  }
  for (let i = 0; i < n; i++) {
    const prefix = strs[0].substr(0, i + 1);
    if (strs.every((str) => str.substr(0, i + 1) === prefix)) {
      ans = prefix;
    } else {
      break;
    }
  }
  return ans;
};
// @lc code=end
