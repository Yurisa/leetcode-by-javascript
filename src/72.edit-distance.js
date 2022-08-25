/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = new Array(m + 1);
  for (let i = 0; i < m + 1; i++) {
    dp[i] = new Array(n + 1).fill(0);
  }
  dp[0][0] = 0;
  for (let i = 1; i < m + 1; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let j = 1; j < n + 1; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i - 1][j - 1] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }
  return dp[m][n];
};
// @lc code=end
