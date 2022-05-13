/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
  function search(nums, lo, hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (nums[mid] < target) {
        if(mid === nums.length -1) {
            return nums.length
        }
      if (target <= nums[mid + 1]) {
        return mid + 1;
      }
      return search(nums, mid + 1, hi);
    } else if (nums[mid] > target) {
        if(mid === 0) return 0
      if (target > nums[mid - 1]) {
        return mid;
      } else if(target === nums[mid - 1]) {
        return mid - 1
      }
      return search(nums, lo, mid - 1);
    } else {
      return mid;
    }
  }
  return search(nums, 0, nums.length - 1);
};
// @lc code=end
