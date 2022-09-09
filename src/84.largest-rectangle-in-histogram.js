/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  // 放置两个哨兵，前一个计算左边跨段，后一个计算右边宽度并且使栈中所有元素出栈
  heights.unshift(0);
  heights.push(0);
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
      const index = stack.pop();
      // 计算左边宽度
      let left = stack[stack.length - 1] + 1;
      let right = i;
      ans = Math.max((right - left) * heights[index], ans);
    }
    stack.push(i);
  }
  return ans;
};
// @lc code=end
