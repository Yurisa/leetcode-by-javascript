/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        res++;
        dfs(grid, i, j);
      }
    }
  }
  function dfs(grid, i, j) {
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1) return;

    if (grid[i][j] === "0") return;

    grid[i][j] = "0";
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  }
  return res;
};
// @lc code=end
