/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let len = s.length;
  const dp = new Array(len).fill(false).map(() => new Array(len).fill(false));
  let ans = "";
  let curLen = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (i === j) {
        dp[i][j] = true;
      } else if (s[i] === s[j] && j - i === 1) {
        dp[i][j] = true;
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      }

      if (dp[i][j] && j - i + 1 > curLen) {
        ans = s.slice(i, j + 1);
        curLen = j - i + 1;
      }
    }
  }
  return ans;
};
// @lc code=end
