/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (j = 0; j < i; j++) {
      // 前缀和剩余都能在wordDict中找到。substring to参数比实际位置多1
      if (dp[j] && wordDict.indexOf(s.substring(j, i)) !== -1) {
        dp[i] = true;
      }
    }
  }
  return dp[n];
};
// @lc code=end
