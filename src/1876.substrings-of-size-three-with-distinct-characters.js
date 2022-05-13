/*
 * @lc app=leetcode id=1876 lang=javascript
 *
 * [1876] Substrings of Size Three with Distinct Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function (s) {
  const n = 3;
  let right = 0;
  const window = []
  let res = 0;

  while (right < s.length) {
    const c = s[right];
    if (right < n - 1) {
      window.push(c);
      right++;
    } else {
      window.push(c);
      right++;
      if (check(window)) {
        res++;
      }
      window.shift();
    }
  }
  return res;
};

function check(window) {
  const set = new Set();
  for (const c of window) {
    if (set.has(c)) {
      return false;
    }
    set.add(c);
  }
  return true;
}
// @lc code=end
