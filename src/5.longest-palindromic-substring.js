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

// 中心扩散法
var longestPalindrome = function (s) {
  const n = s.length;
  let max = 0;
  let len = 1;
  let start = -1;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    let l = i - 1;
    let r = i + 1;
    while (l >= 0 && s[l] === c) {
      l--;
      len++;
    }
    while (r < n && s[r] === c) {
      r++;
      len++;
    }
    while (s[l] === s[r] && l >= 0 && r < n) {
      len = len + 2;
      l--;
      r++;
    }
    if (len > max) {
      max = len;
      start = l;
    }
    len = 1;
  }
  return s.substr(start + 1, max);
};