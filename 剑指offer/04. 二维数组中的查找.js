/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    let l = 0;
    let r = n - 1;
    while (l <= r) {
      let mid = (l + r) >> 1;

      if (target === matrix[i][mid]) return true;
      if (target < matrix[i][mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return false;
};

// 双指针从左下角开始寻找
var findNumberIn2DArray = function (matrix, target) {
  let i = matrix.length - 1;
  let j = 0;
  while (i >= 0 && j < matrix[0].length) {
    if (target > matrix[i][j]) {
      j++;
    } else if (target < matrix[i][j]) {
      i--;
    } else {
      return true;
    }
  }
  return false;
};

// 从左下角遍历
