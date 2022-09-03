/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let cur = 0;
  let ans = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        cur = 1;
        dfs(i, j);
        cur = 0;
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n) return;

    if (grid[i][j] === 0) return;

    grid[i][j] = 0;

    ans = Math.max(ans, cur);

    cur++;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  return ans;
};
// @lc code=end
