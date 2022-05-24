/*
 * @lc app=leetcode id=2280 lang=javascript
 *
 * [2280] Minimum Lines to Represent a Line Chart
 */

// @lc code=start
/**
 * @param {number[][]} stockPrices
 * @return {number}
 */
 var minimumLines = function (stockPrices) {
  const n = stockPrices.length;
  if (n === 1) return 0;
  stockPrices.sort((a, b) => a[0] - b[0]);
  let res = 1;
  for (let i = 2; i < n; i++) {
    let x1 = stockPrices[i][0] - stockPrices[i - 1][0];
    let x2 = stockPrices[i - 1][0] - stockPrices[i - 2][0];
    let y1 = stockPrices[i][1] - stockPrices[i - 1][1];
    let y2 = stockPrices[i - 1][1] - stockPrices[i - 2][1];
    if (BigInt(x1)* BigInt(y2) !== BigInt(x2) * BigInt(y1)) res++;
  }
  return res;
};
// @lc code=end
