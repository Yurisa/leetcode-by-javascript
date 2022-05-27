/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function (s) {
  let level = 0;
  let res = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === ')') level--;
    if (level >= 1) res += c;
    if (c === '(') level++;
  }
  return res;
};
// @lc code=end
