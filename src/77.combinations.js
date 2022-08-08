/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];
  function backtrack(path, start) {
    if (path.length === k) {
      ans.push(path);
      return;
    }

    for (let i = start; i <= n; i++) {
      backtrack(path.concat(i), i + 1);
    }
  }
  backtrack([], 1);
  return ans;
};
// @lc code=end
