/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  let m = matrix.length;
  let n = matrix[0].length;
  let l = 0;
  let r = n - 1;
  let t = 0;
  let b = m - 1;
  const ans = [];

  while (true) {
    // 从左到右
    for (let i = l; i <= r; i++) ans.push(matrix[t][i]);
    if (++t > b) break;
    // 从上到下
    for (let i = t; i <= b; i++) ans.push(matrix[i][r]);
    if (--r < l) break;
    // 从右到左
    for (let i = r; i >= l; i--) ans.push(matrix[b][i]);
    if (--b < t) break;
    for (let i = b; i >= t; i--) ans.push(matrix[i][l]);
    if (++l > r) break;
  }
  return ans;
};
