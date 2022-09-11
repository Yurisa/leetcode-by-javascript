/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const ans = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const cur = stack.pop();
      ans[cur] = i - cur;
    }
    stack.push(i);
  }
  while (stack.length) {
    const cur = stack.pop();
    ans[cur] = 0;
  }
  return ans;
};
// @lc code=end
