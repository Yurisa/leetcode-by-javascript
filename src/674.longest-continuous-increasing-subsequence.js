/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  const n = nums.length;
  let max = 1;
  let cur = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      cur++;
    } else {
      cur = 1;
    }
    max = Math.max(cur, max);
  }
  return max;
};
// @lc code=end
