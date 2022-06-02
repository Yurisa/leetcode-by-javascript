/*
 * @lc app=leetcode id=1475 lang=javascript
 *
 * [1475] Final Prices With a Special Discount in a Shop
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
  const n = prices.length
  const st = []
  const res= new Array(n)
  for (let i = n - 1; i >=0; i--) {
      const curPrice = prices[i]
      while(st.length >0 && st[st.length - 1] > curPrice) {
          st.pop()
      }
      res[i] = st.length > 0 ? curPrice - st[st.length - 1] : curPrice
      st.push(curPrice)
  }
  return res;
};
// @lc code=end

