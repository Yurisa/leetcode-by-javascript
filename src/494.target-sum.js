/*
 * @lc app=leetcode id=494 lang=javascript
 *
 * [494] Target Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let cnt = 0;
  function backtrack(nums, target, start, sum) {
    if (start > nums.length) return;
    if (start === nums.length && sum === target) {
      cnt++;
      return;
    } else {
      backtrack(nums, target, start + 1, sum + nums[start]);
      backtrack(nums, target, start + 1, sum - nums[start]);
    }
  }
  backtrack(nums, target, 0, 0);
  return cnt;
};
// @lc code=end
