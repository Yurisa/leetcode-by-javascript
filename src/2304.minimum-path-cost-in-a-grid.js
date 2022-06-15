/*
 * @lc app=leetcode id=2304 lang=javascript
 *
 * [2304] Minimum Path Cost in a Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */
var minPathCost = function (grid, moveCost) {
  const n = grid.length;
  const m = grid[0].length;
  const dp = Array(n)
    .fill()
    .map(() => Array(m).fill(0));
  let res = Infinity;
  for (let i = 0; i < dp.length; i++) {
    dp[i].fill(Infinity);
  }

  for (let j = 0; j < m; j++) {
    dp[0][j] = grid[0][j];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let k = 0; k < m; k++) {
        dp[i][j] = Math.min(
          dp[i - 1][k] + moveCost[grid[i - 1][k]][j] + grid[i][j],
          dp[i][j]
        );
      }
    }
  }
  for (let j = 0; j < m; j++) {
    res = Math.min(res, dp[n - 1][j]); //寻找达到尾部的最小值
  }
  return res;
};
// @lc code=end
