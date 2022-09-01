/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const n = s.length;
  let left = 0;
  let right = 0;
  let isValid = 0;
  let len = Number.MAX_VALUE;
  const need = toMap(t);
  const needLength = Object.keys(need).length;
  const window = {};
  while (right < n) {
    const c = s[right];
    if (need[c]) {
      if (!window[c]) {
        window[c] = 0;
      }
      window[c]++;

      if (window[c] === need[c]) {
        isValid++;
      }
    }

    while (isValid === needLength) {
      if (right - left + 1 < len) {
        len = right - left + 1;
        start = left;
      }

      const d = s[left];
      left++;

      if (need[d]) {
        if (need[d] === window[d]) {
          isValid--;
        }
        window[d]--;
      }
    }
    right++;
  }

  function toMap(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
      if (!map[s[i]]) {
        map[s[i]] = 0;
      }
      map[s[i]]++;
    }
    return map;
  }
  return len === Number.MAX_VALUE ? "" : s.substr(start, len);
};
// @lc code=end
