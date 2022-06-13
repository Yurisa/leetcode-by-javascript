/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const expected = [...heights];
  expected.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    if (expected[i] !== heights[i]) {
      res++;
    }
  }
  return res;
};
// @lc code=end
