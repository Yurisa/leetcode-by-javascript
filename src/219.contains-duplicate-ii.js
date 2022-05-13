/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let n = nums.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
    // 保证set的size小于等于k
    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
};
// @lc code=end
