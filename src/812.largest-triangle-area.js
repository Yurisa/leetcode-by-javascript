/*
 * @lc app=leetcode id=812 lang=javascript
 *
 * [812] Largest Triangle Area
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
  const n = points.length;
  let res = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const ix = points[i][0],
          iy = points[i][1];
        const jx = points[j][0],
          jy = points[j][1];
        const kx = points[k][0],
          ky = points[k][1];

        res = Math.max(
          res,
          Math.abs(ix * jy - jx * iy + jx * ky - kx * jy + kx * iy - ix * ky)
        );
      }
    }
  }
  return res / 2;
};
// @lc code=end
