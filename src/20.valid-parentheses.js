/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [s[0]];

  for (let i = 1; i < s.length; i++) {
    if (map[s[i]] && stack[stack.length - 1] === map[s[i]]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.length === 0;
};
// @lc code=end
