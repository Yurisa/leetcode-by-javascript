/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0;
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        if (j === 0 || i === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
      max = Math.max(dp[i][j], max);
    }
  }
  return max * max;
};
// @lc code=end
