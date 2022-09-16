/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = new Array(nums.length);
  let k = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] = k;
    k = k * nums[i];
  }
  k = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = res[i] * k;
    k = k * nums[i];
  }
  return res;
};
// @lc code=end
