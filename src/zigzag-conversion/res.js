/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const len = s.length;
  if (len === 0 || numRows === 1) return s;

  const arr = new Array(numRows).fill('');
  // 1代表正向，-1代表负向
  let direction = 1;
  let row = 0;

  for (let i = 0; i < len; i++) {
    arr[row] += s[i];

    row = row + direction;
    if (row >= numRows) {
      row = numRows - 1 - 1;
      direction = -1;
    }

    if (row < 0) {
      row = 1;
      direction = 1;
    }
  }
  return arr.join('');
};
// @lc code=end
