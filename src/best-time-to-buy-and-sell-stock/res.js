/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let ret = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let max = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
    ret = Math.max(max, ret);
  }
  return ret
};
