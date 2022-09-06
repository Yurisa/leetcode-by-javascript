/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  let max = 0;
  for (let i = 1; i < n; i++) {
    let p = prices[i] - prices[i - 1];
    if (p > 0) max += p;
  }
  return max;
};
// @lc code=end
