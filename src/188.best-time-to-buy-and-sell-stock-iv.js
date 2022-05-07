/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  const max_k = k;
  const n = prices.length;

  // 一次交易需要两天,k 无限大会导致栈溢出
  if (k > n / 2) {
    return maxProfit_k_inf(prices);
  }
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

function maxProfit_k_inf(prices) {
  const n = prices.length;
  let dp_i_0 = 0,
    dp_i_1 = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let temp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, temp - prices[i]);
  }
  return dp_i_0;
}
// @lc code=end
