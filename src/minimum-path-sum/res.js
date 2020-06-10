/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid || !grid.length) return 0;
  const m = grid.length;
  const n = grid[0].length;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }

  dp[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j > 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0 && i > 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else if (j > 0 && i > 0) {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
      }
    }
  }
  return dp[m - 1][n - 1];
};

const input = [
  [1, 3, 1],
  [1, 1, 1],
  [4, 2, 1],
];

console.log(minPathSum(input))
