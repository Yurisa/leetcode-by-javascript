/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let j = 0;
  const str = [];
  let res = 0;
  while (j < s.length) {
    const cur = s[j];
    if (!str.includes(cur)) {
      str.push(cur);
      j++;
      res = Math.max(res, str.length);
    } else {
      str.shift();
    }
  }
  return res;
};

var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let res = 0;
  while (j < s.length) {
    const cur = s[j];

    while (i < j && s.subString(i, j).includes(cur)) {
      i++;
    }
    res = Math.max(j - i + 1, res);
    j++;
  }
  return res;
};

/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function (s) {
  let j = 0;
  const str = [];
  let res = 0;
  while (j < s.length) {
    const cur = s[j];
    if (!str.includes(cur)) {
      str.push(cur);
      j++;
      res = Math.max(res, str.length);
    } else {
      str.shift();
    }
  }
  return res;
};

// 解法二
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let res = 0;
  while (j < s.length) {
    const cur = s[j];

    while (i < j && s.substring(i, j).includes(cur)) {
      i++;
    }
    res = Math.max(j - i + 1, res);
    j++;
  }
  return res;
};
// @lc code=end

// @lc code=end
