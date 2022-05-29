/*
 * @lc app=leetcode id=2288 lang=javascript
 *
 * [2288] Apply Discount to Prices
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
 var discountPrices = function (sentence, discount) {
  const rate = (100 - discount) / 100;
  const arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/^\$\d+(.*)/g, (result, pos, origintext) => {
      const res = result.substring(1) * rate;
      if (isNaN(res)) return result;
      return '$' + res.toFixed(2);
    });
  }
  return arr.join(' ');
};

// @lc code=end

