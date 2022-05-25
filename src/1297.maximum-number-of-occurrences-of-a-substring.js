/*
 * @lc app=leetcode id=1297 lang=javascript
 *
 * [1297] Maximum Number of Occurrences of a Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
 var maxFreq = function (s, maxLetters, minSize, maxSize) {
  const map = {};
  const strMap = {}
  let l = 0;
  let r = 0;
  let res = 0

  while (r < s.length) {
    map[s[r]] = (map[s[r]] || 0) + 1;
    let len = r - l + 1;
    while(Object.keys(map).length > maxLetters || len > minSize) {
      const cnt = map[s[l]];
      if (cnt === 1) {
        delete map[s[l]];
      } else {
        map[s[l]] = cnt - 1;
      }
      l++;
      len--
    }
    if(Object.keys(map).length <= maxLetters && len === minSize) {
      strMap[s.substr(l, r - l + 1)] =  (strMap[s.substr(l, r - l + 1)] || 0) + 1
    }
    r++;
  }
  Object.keys(strMap).forEach(key => {
      res = Math.max(res, strMap[key])
  })

  return res;
};

const getMaxLetters = (map) => {
  return Object.keys(map).length;
};
// @lc code=end
