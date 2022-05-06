/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const max_k = 2;
  const n = prices.length;
  const dp = Array.from({ length: n }, (x) =>
    Array.from({ length: max_k + 1 }, (y) =>
      Array.from({ length: 2 }, (z) => 0)
    )
  );
  for (let i = 0; i < n; i++) {
    for (let k = max_k; k >= 1; k--) {
      if (i - 1 === -1) {
        // 处理 base case
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }
      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }
  return dp[n - 1][max_k][0];
};
// @lc code=end
