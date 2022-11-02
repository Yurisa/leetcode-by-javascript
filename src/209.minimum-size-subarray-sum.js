/*
 * @lc app=leetcode id=209 lang=javascript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let n = nums.length;
  let curSum = 0;
  let ans = Number.MAX_VALUE
  while (right < n) {
    const num = nums[right];
    curSum += num;
    while (curSum >= target) {
      ans = Math.min(ans, right - left + 1)
      curSum -= nums[left];
      left++;
    }
    right++
  }
  return ans === Number.MAX_VALUE ? 0 : ans
};
// @lc code=end
