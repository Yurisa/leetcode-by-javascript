/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const n = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let mx = 1;
  let mn = 1;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0) {
      let tmp = mn;
      mn = mx;
      mx = tmp;
    }

    mx = Math.max(nums[i], mx * nums[i]);
    mn = Math.min(nums[i], mn * nums[i]);
    max = Math.max(max, mn, mx);
  }
  return max;
};
// @lc code=end
