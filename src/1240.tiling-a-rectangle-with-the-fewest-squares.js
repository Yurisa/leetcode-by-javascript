/*
 * @lc app=leetcode id=1240 lang=javascript
 *
 * [1240] Tiling a Rectangle with the Fewest Squares
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var tilingRectangle = function (n, m) {
  if (m === n) {
    return 1;
  }

  const covered = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let ans = n * m;

  function dfs(n, m, cur) {
    if (cur >= ans) return;

    let row;
    let col;
    let full = true;
    for (let i = 0; i < n && full; i++) {
      for (let j = 0; j < m && full; j++) {
        if (covered[i][j] === 0) {
          full = false;
          row = i;
          col = j;
        }
      }
    }
    if (full) {
      ans = Math.min(ans, cur);
      return;
    }

    for (let len = Math.min(n - row, m - col); len >= 1; len--) {
      let isEmpty = true;
      for (let i = row; i < row + len && isEmpty; i++) {
        for (let j = col; j < col + len && isEmpty; j++) {
          if (covered[i][j] === 1) isEmpty = false;
        }
      }
      if (!isEmpty) continue;

      for (let i = row; i < row + len; i++)
        for (let j = col; j < col + len; j++) covered[i][j] = 1;

      dfs(n, m, cur + 1);

      for (let i = row; i < row + len; i++)
        for (let j = col; j < col + len; j++) covered[i][j] = 0;
    }
  }

  dfs(n, m, 0);
  return ans;
};
// @lc code=end
