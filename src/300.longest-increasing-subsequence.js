/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度
  const n = nums.length;
  if (n === 0) return 0;

  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end
