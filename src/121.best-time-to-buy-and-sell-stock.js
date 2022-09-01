/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let cur = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > cur) {
      max = Math.max(prices[i] - cur, max);
    } else {
      cur = prices[i];
    }
  }
  return max;
};
// @lc code=end
