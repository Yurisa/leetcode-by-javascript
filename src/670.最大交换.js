/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const s = num.toString().split('');
  for (let i = 0; i < s.length; i++) {
    let pos = i;
    for (let j = s.length - 1; j > i; j--) {
      if (s[j] > s[pos]) {
        pos = j;
      }
    }
    if (pos !== i) {
      [s[pos], s[i]] = [s[i], s[pos]];
      return parseInt(s.join(''));
    }
  }
  return num;
};
// @lc code=end
