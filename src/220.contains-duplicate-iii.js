/*
 * @lc app=leetcode id=220 lang=javascript
 *
 * [220] Contains Duplicate III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let left = 0;
  let right = 0;
  const n = nums.length;
  while (right < n) {
    const num = nums[right];

    if (right !== left && Math.abs(nums[right] - nums[left]) <= t) {
      console.log("right", right, "left", left);
      return true;
    }
    right++;

    while (right - left > k) {
      left++;
    }
  }
  return false;
};

function check(nums, left, right) {
  return left !== right
}
// @lc code=end
