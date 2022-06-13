/*
 * @lc app=leetcode id=2302 lang=javascript
 *
 * [2302] Count Subarrays With Score Less Than K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countSubarrays = function(nums, k) {
  let l = 0;
  let r = 0;
  let res = 0;
  let sum = 0
  while(r < nums.length) {
      sum += nums[r]
      while(sum * (r - l + 1) >= k) {
          sum -= nums[l]
          l++;
      }
      res += r - l + 1
      r++
  }
  return res
};
// @lc code=end

