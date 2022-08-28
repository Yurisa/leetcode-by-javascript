/*
 * @lc app=leetcode id=329 lang=javascript
 *
 * [329] Longest Increasing Path in a Matrix
 */

// @lc code=start
/** 记忆化搜索+dfs
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let ans = 0;

  const memo = new Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(-1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (memo[i][j] === -1) {
        const maxValue = dfs(i, j, -1);
        ans = Math.max(maxValue, ans);
      } else {
        ans = Math.max(memo[i][j], ans);
      }
    }
  }

  function dfs(i, j, prev) {
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return 0;
    }

    if (matrix[i][j] <= prev) {
      return 0;
    }

    if (memo[i][j] !== -1) return memo[i][j];

    memo[i][j] =
      Math.max(
        dfs(i - 1, j, matrix[i][j]),
        dfs(i + 1, j, matrix[i][j]),
        dfs(i, j - 1, matrix[i][j]),
        dfs(i, j + 1, matrix[i][j])
      ) + 1;
    return memo[i][j];
  }
  return ans;
};
// @lc code=end
