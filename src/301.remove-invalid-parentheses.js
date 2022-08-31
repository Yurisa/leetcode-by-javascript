/*
 * @lc app=leetcode id=301 lang=javascript
 *
 * [301] Remove Invalid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  const n = s.length;
  let l = 0;
  let r = 0;
  let len = 0;
  const set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      l++;
    } else if (s[i] === ")") {
      r++;
    }
  }
  let max = Math.min(l, r);
  dfs(0, "", 0);

  function dfs(u, cur, score) {
    if (score < 0 || score > max) return;
    if (u == n) {
      if (score == 0 && cur.length >= len) {
        if (cur.length > len) set.clear();
        len = cur.length;
        set.add(cur);
      }
      return;
    }

    const c = s[u];
    if (c === "(") {
      dfs(u + 1, cur + c, score + 1);
      dfs(u + 1, cur, score);
    } else if (c === ")") {
      dfs(u + 1, cur + c, score - 1);
      dfs(u + 1, cur, score);
    } else {
      dfs(u + 1, cur + c, score);
    }
  }
  return [...set];
};
// @lc code=end
