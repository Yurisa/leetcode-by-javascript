/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let len = nums.length;
  let sum = 0;
  for (const n of nums) {
    sum += n;
  }
  if (sum % 2 === 1) {
    return false;
  }
  const target = sum / 2;
  const dp = new Array(len);
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(target + 1).fill(false);
  }

  if (nums[0] <= target) {
    for (let i = 0; i < len; i++) {
      dp[i][nums[0]] = true;
    }
  }

  for (let i = 1; i < len; i++) {
    for (let j = 0; j <= target; j++) {
      if (nums[i] === j) {
        dp[i][j] = true;
      } else if (nums[i] < j) {
        dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[len - 1][target];
};
// @lc code=end
