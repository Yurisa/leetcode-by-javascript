/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const memo = new Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(-1);
  }
  function dp(x, y) {
    if (x === 0 && y === 0) {
      return grid[0][0];
    }
    if (x < 0 || y < 0) {
      return Number.MAX_VALUE;
    }

    if (memo[x][y] !== -1) {
      return memo[x][y];
    }

    memo[x][y] = Math.min(dp(x - 1, y), dp(x, y - 1)) + grid[x][y];
    return memo[x][y];
  }
  return dp(m - 1, n - 1);
};
