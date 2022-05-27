/*
 * @lc app=leetcode id=978 lang=javascript
 *
 * [978] Longest Turbulent Subarray
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxTurbulenceSize = function (arr) {
  const n = arr.length;
  let res = 1;
  let l = 0;
  for (let r = 1; r < n; r++) {
    if (arr[r] === arr[r - 1]) {
      l = r;
    } else if (((arr[r] - arr[r - 1])^(arr[r - 1] - arr[r - 2])) >= 0) {
      l = r - 1;
    }
    res = Math.max(res, r - l + 1);
  }
  return res;
};
// @lc code=end
