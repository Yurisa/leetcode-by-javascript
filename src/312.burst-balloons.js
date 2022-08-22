/*
 * @lc app=leetcode id=312 lang=javascript
 *
 * [312] Burst Balloons
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
  const n = nums.length;
  const coins = new Array(n + 2);
  coins[0] = 1;
  coins[n + 1] = 1;
  for (let i = 1; i <= n; i++) {
    coins[i] = nums[i - 1];
  }

  const dp = new Array(n + 2);
  for (let i = 0; i < n + 2; i++) {
    dp[i] = new Array(n + 2).fill(0);
  }

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 2; j <= n + 1; j++) {
      for (let k = i + 1; k <= j - 1; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + coins[i] * coins[k] * coins[j]
        );
      }
    }
  }
  return dp[0][n + 1];
};
// @lc code=end
