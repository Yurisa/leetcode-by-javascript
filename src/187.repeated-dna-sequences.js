/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let right = 0;
  let left = 0;
  let cur = "";
  const map = new Map();
  const set = new Set();

  while (right < s.length) {
    const c = s[right];
    cur += c;
    while (cur.length >= 10) {
      if (cur.length === 10) {
        if (!map.has(cur)) {
          map.set(cur, 1);
        } else {
          set.add(cur);
        }
      }
      cur = cur.slice(1);
      left++;
    }
    right++;
  }
  return [...set];
};
// @lc code=end
