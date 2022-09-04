/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const n = chars.length;
  let pre = chars[0];
  let cnt = 1;
  for (let i = 1; i < n; i++) {
    let cur = chars[i];
    if (chars[i] === pre) {
      cnt++;
      chars[i] = 0;
    } else {
      if (cnt > 1) {
        chars[i - 1] = String(cnt);
        cnt = 1;
      }
    }
    if (i === n - 1) {
      if (cnt > 1) {
        chars[i] = String(cnt);
      }
    }
    pre = cur;
  }
  for (let i = 0; i < n; i++) {
    if (chars[i] === 0) {
      chars.splice(i, 1);
      i--;
    }
  }
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] >= 10) {
      const str = chars[i].split("");

      chars.splice(i, 1, ...str);
      i += str.length - 1;
    }
  }

  return chars.length;
};
// @lc code=end
