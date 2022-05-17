/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
 var isAlienSorted = function(words, order) {
  if (words.length === 0) return true;
  let prev = words[0];
  for (let i = 1; i < words.length; i++) {
    const maxlen = Math.max(prev.length, words[i].length);
    let l = 0;

    while (l < maxlen) {
      const firstIndex = prev[l]
        ? order.indexOf(prev[l])
        : Number.MIN_SAFE_INTEGER;
      const secondIndex = words[i][l]
        ? order.indexOf(words[i][l])
        : Number.MIN_SAFE_INTEGER;
      if (firstIndex > secondIndex) {
        return false;
      } else if (firstIndex === secondIndex) {
        l++;
      } else {
        break;
      }
    }
    prev = words[i];
  }
  return true;
}
// @lc code=end

