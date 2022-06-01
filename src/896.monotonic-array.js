/*
 * @lc app=leetcode id=896 lang=javascript
 *
 * [896] Monotonic Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  return isSorted(nums) || isSorted(nums.reverse());
  function isSorted(nums) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] >= nums[i - 1]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
};
// @lc code=end
