/*
 * @lc app=leetcode id=944 lang=javascript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function (strs) {
  const n = strs[0].length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < strs.length; j++) {
        result = strs[j][i].charCodeAt() - strs[j - 1][i].charCodeAt() >= 0;
      if (!result) {
        res ++;
        break
      }
    }
  }
  return res;
};
// @lc code=end
