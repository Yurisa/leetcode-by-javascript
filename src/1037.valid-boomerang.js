/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [a, b, c] = points;
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x3, y3] = c;

  if ((x1 - x2) * (y2 - y3) === (y1 - y2) * (x2 - x3)) {
    return false;
  }
  return true;
};

// 线性代数已知三点三角形面积公式S=|(x1y2+x2y3+x3y1-x1y3-x2y1-x3y2)/2|
var isBoomerang = function (points) {
  const [a, b, c] = points;
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x3, y3] = c;

  if ((x1 - x2) * (y2 - y3) === (y1 - y2) * (x2 - x3)) {
    return false;
  }
  return true;
};

// 线性代数已知三点三角形面积公式S=|(x1y2+x2y3+x3y1-x1y3-x2y1-x3y2)/2|
var isBoomerang = function (points) {
  const [a, b, c] = points;
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x3, y3] = c;

  if ((x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2) / 2) {
    return true;
  }
  return false;
};
// @lc code=end
