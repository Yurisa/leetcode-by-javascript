/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    let l = 0;
    let r = n - 1;
    while (l < r) {
      [matrix[i][l], matrix[i][r]] = [matrix[i][r], matrix[i][l]];
      l++;
      r--;
    }
  }
  return matrix;
};
// @lc code=end
