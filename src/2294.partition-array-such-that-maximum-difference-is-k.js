/*
 * @lc app=leetcode id=2294 lang=javascript
 *
 * [2294] Partition Array Such That Maximum Difference Is K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
  nums.sort((a, b) => a - b);
  let res = 1;
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let max = nums[i];
    if (max - min > k) {
      res++;
      min = nums[i];
    }
  }
  return res;
};
// @lc code=end
