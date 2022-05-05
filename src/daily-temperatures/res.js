/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function (temperatures) {
  const ret = [];
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length > 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
      stack.pop();
    }
    ret[i] = stack.length === 0 ? 0 : (stack[stack.length - 1] - i);
    stack.push(i);
  }
  return ret;
};
// @lc code=end
