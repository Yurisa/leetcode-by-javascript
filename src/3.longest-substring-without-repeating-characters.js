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

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const n = s.length;
  let l = 0;
  let r = 0;
  let ans = 0;
  let cur = 0;

  while (r < n) {
    const c = s[r];
    cur++;

    while (set.has(c)) {
      set.delete(s[l]);
      l++;
      cur--;
    }

    ans = Math.max(ans, cur);
    set.add(c);
    r++;
  }
  return ans;
};

var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  const n = s.length;
  let ans = 0;
  const set = new Set();
  while (r < n) {
    const c = s[r];
    while (set.has(c)) {
      set.delete(s[l]);
      l++;
    }
    ans = Math.max(ans, r - l + 1);

    set.add(c);
    r++;
  }
  return ans;
};
