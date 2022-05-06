/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function (prices) {
  const n = prices.length;
  const dp = Array.from({ length: n }, (x) =>
    Array.from(
      {
        length: 2,
      },
      (y) => 0
    )
  );

  for (let i = 0; i < n; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0;
      dp[i][1] = -prices[i];
      continue;
    }

    if (i - 2 === -1) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i]);
  }
  return dp[n - 1][0];
};
// @lc code=end
