/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const groups = {};
  for (const str of strs) {
    const code = encode(str);
    if (!groups[code]) {
      groups[code] = [];
    }
    groups[code].push(str);
  }

  return Object.values(groups);
};

function encode(s) {
  const count = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const code = s[i].charCodeAt() - 'a'.charCodeAt();
    count[code]++;
  }
  return count.toString();
}
// @lc code=end
