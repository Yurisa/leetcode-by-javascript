/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const n = nums.length;

  const ans = [];
  function backtrack(path, len, start) {
    if (len === path.length) {
      ans.push(path);
      return;
    }

    for (let i = start; i < n; i++) {
      backtrack(path.concat(nums[i]), len, i + 1);
    }
  }

  for (let i = 0; i <= n; i++) {
    backtrack([], i, 0);
  }
  return ans;
};
// @lc code=end
