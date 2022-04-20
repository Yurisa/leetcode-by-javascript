/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const ret = [];

  let upper = 0;
  let lower = m - 1;
  let left = 0;
  let right = n - 1;

  while (ret.length < m * n) {
    if (upper <= lower) {
      // 从左向右遍历
      for (let j = left; j <= right; j++) {
        ret.push(matrix[upper][j]);
      }
      upper++;
    }

    // 右侧从上往下遍历
    if (right >= left) {
      for (let i = upper; i <= lower; i++) {
        ret.push(matrix[i][right]);
      }
      right--;
    }

    if (upper <= lower) {
      for (let j = right; j >= left; j--) {
        ret.push(matrix[lower][j]);
      }
      lower--;
    }

    if (right >= left) {
      for (let i = lower; i >= upper; i--) {
        ret.push(matrix[i][left]);
      }
      left++;
    }
  }
  return ret;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
