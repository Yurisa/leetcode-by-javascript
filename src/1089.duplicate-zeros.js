/*
 * @lc app=leetcode id=1089 lang=javascript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let i = 0;
  let j = 0;

  const n = arr.length;
  while (j < n) {
    if (arr[i] === 0) j++;
    i++;
    j++;
  }
  i--;
  j--;
  while (i >= 0) {
    if (j < n) arr[j] = arr[i];
    if (arr[i] === 0 && --j >= 0) arr[j] = 0;
    j--;
    i--;
  }
};
// @lc code=end
