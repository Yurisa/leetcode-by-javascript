/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function (s) {
  if (!s) return s;
  const s1 = s.trim();
  const s2 = reverse(s1);
  const arr2 = s2.split(' ');
  let ret = arr2.filter(item => !!item).map((item) => reverse(item)).join(' ');

  function reverse(s) {
    return s.split('').reverse().join('');
  }

  return ret;
};
// @lc code=end
