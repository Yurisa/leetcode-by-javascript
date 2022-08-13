/*
 * @lc app=leetcode id=647 lang=javascript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    let s1 = '';
    let s2 = '';
    for (j = i; j < s.length; j++) {
      // s[j] 开头的子串
      s1 = s1 + s[j];
      s2 = s[j] + s2;

      if (s1 === s2) ans++;
    }
  }
  return ans;
};
// @lc code=end
