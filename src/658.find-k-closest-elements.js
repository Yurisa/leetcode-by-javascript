/*
 * @lc app=leetcode id=658 lang=javascript
 *
 * [658] Find K Closest Elements
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  const n = arr.length;
  let l = 0;
  let r = n - k;
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    if (x - arr[mid] > arr[mid + k] - x) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  const res = [];
  for (let i = r; i < r + k; i++) {
    res.push(arr[i]);
  }
  return res;
};
// @lc code=end
