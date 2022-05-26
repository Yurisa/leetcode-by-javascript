/*
 * @lc app=leetcode id=699 lang=javascript
 *
 * [699] Falling Squares
 */

// @lc code=start
/**
 * @param {number[][]} positions
 * @return {number[]}
 */
 var fallingSquares = function (positions) {
  const n = positions.length;
  const heights = [];

  for (let i = 0; i < n; i++) {
    let left1 = positions[i][0];
    let right1 = left1 + positions[i][1] - 1;
    let height = positions[i][1];
    for (let j = 0; j < i; j++) {
      let left2 = positions[j][0];
      let right2 = left2 + positions[j][1] - 1;
      if (left2 <= right1 && right2 >= left1) {
        height = Math.max(height, heights[j] + positions[i][1]);
      }
    }
    heights.push(height);
  }
  const ret = [heights[0]];

  for (let i = 1; i < n; i++) {
    ret.push(Math.max(ret[i - 1], heights[i]));
  }
  return ret;
};
// @lc code=end

