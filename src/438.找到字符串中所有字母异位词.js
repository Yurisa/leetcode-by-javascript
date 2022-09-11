/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

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
var findAnagrams = function (s, t) {
  const n = s.length;
  let left = 0;
  let right = 0;
  let isValid = 0;
  let len = Number.MAX_VALUE;
  const need = toMap(t);
  const needLength = Object.keys(need).length;
  const window = {};
  const ans = [];
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

    while (right - left + 1 >= t.length) {
      if (isValid === needLength) {
        len = right - left + 1;
        start = left;
        ans.push(start);
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
  return ans;
};
// @lc code=end
