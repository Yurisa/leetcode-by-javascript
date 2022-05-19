/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let l = 0;
  let r = m * n - 1;
  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2);

    const cur =
      matrix[Math.floor(mid / n)][mid % n]
    if (target === cur) {
      return true;
    } else if (target > cur) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return false;
};
// @lc code=end