/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  if (n === 0) return 0;
  const dp = new Array(n);
  dp[0] = nums[0];

  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }

  for (let i = 0; i < n; i++) {
    res = Math.max(res, dp[i]);
  }

  return res;
};
// @lc code=end
