/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 1) return nums[0];
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let k = len >> 1;
  let cur = 1;
  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[i - 1]) {
      cur++;
      if (cur > k) return nums[i];
    } else if (nums[i] !== nums[i - 1]) {
      cur = 1;
    }
  }
  return;
};
// @lc code=end
