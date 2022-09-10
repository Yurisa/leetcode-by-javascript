/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 记录每行的高度
  const allHeights = [];
  for (let i = m - 1; i >= 0; i--) {
    const heights = new Array(n).fill(0);
    for (let j = 0; j < n; j++) {
      let k = i;
      while (k >= 0 && matrix[k][j] === '1') {
        heights[j]++;
        k--;
      }
    }
    allHeights.push(heights);
  }

  let ans = 0;
  for (const heights of allHeights) {
    const stack = [];
    heights.unshift(0);
    heights.push(0);

    for (let i = 0; i < heights.length; i++) {
      while (
        stack.length > 0 &&
        heights[stack[stack.length - 1]] > heights[i]
      ) {
        const index = stack.pop();
        const left = stack[stack.length - 1] + 1;
        const right = i;
        ans = Math.max(ans, (right - left) * heights[index]);
      }
      stack.push(i);
    }
  }
  return ans;
};
// @lc code=end
