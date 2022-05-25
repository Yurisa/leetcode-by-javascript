/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
 var findSubstringInWraproundString = function (p) {
  // 记录以key为结尾的最长子串的长度，同时代表以key为结尾的子串的个数
  const map = {
      [p[0]]: 1
  };
  let pre = 1;

  for (let i = 1; i < p.length; i++) {
    if (
      p[i].charCodeAt() - p[i - 1].charCodeAt() === 1 ||
      p[i].charCodeAt() - p[i - 1].charCodeAt() === -25
    ) {
      pre += 1;
    } else {
      pre = 1;
    }
    map[p[i]] = Math.max(map[p[i]] || 0, pre);
  }

  let sum = 0;
  Object.keys(map).forEach((key) => {
    sum += map[key];
  });
  return sum;
};
// @lc code=end
