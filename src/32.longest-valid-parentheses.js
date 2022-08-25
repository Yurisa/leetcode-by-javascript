/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const n = s.length;
  // dp[i]定义以s[i]为结尾的括号长度
  const dp = new Array(n).fill(0);

  dp[0] = 0;
  let max = Number.MIN_VALUE;
  for (let i = 1; i < n; i++) {
    if (s[i] === ")") {
      if (s[i - 1] === "(") {
        dp[i] = 2;
        if (i - 2 >= 0) {
          dp[i] = dp[i - 2] + dp[i];
        }
      } else if (dp[i - 1] > 0) {
        if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === "(") {
          dp[i] = dp[i - 1] + 2;
          if (i - dp[i - 1] - 2 >= 0) {
            dp[i] = dp[i] + dp[i - dp[i - 1] - 2];
          }
        }
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};
// @lc code=end
