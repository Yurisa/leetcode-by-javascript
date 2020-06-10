/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (!obstacleGrid || !obstacleGrid.length) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }

  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
        continue
      }

      if (i === 0 && j > 0) {
        dp[i][j] = !!obstacleGrid[i][j - 1] ? 0 : dp[i][j - 1];
      } else if (j === 0 && i > 0) {
        dp[i][j] = !!obstacleGrid[i - 1][j] ? 0 : dp[i - 1][j];
      } else if (j > 0 && i > 0) {
        dp[i][j] =
          (!!obstacleGrid[i][j - 1] ? 0 : dp[i][j - 1]) +
          (!!obstacleGrid[i - 1][j] ? 0 : dp[i - 1][j]);
      }
    }
  }
  return dp[m - 1][n - 1];
};

const input = [[0, 1]];

console.log(uniquePathsWithObstacles(input));
