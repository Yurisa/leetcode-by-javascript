/*
 * @lc app=leetcode id=1092 lang=javascript
 *
 * [1092] Shortest Common Supersequence
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  let s1 = " " + str1;
  let s2 = " " + str2;
  const m = str1.length;
  const n = str2.length;

  const dp = new Array(m + 10).fill(0).map(() => new Array(n + 10).fill(0));

  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (s1[i] === s2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  let i = m;
  let j = n;
  let ans = "";

  // 公共部分加上两个串独有的
  while (i > 0 || j > 0) {
    if (i === 0) {
      ans += s2[j];
      j--;
    } else if (j === 0) {
      ans += s1[i];
      i--;
    } else {
      // 相同字符
      if (s1[i] === s2[j]) {
        ans += s1[i];
        i--;
        j--;
      } else if (dp[i][j] === dp[i - 1][j]) {
        // i独有
        ans += s1[i];
        i--;
      } else if (dp[i][j] === dp[i][j - 1]) {
        ans += s2[j];
        j--;
      }
    }
  }
  return ans.split("").reverse().join("");
};
// @lc code=end
