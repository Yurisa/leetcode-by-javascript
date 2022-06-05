/*
 * @lc app=leetcode id=2293 lang=javascript
 *
 * [2293] Min Max Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  let newNums = [];
  while (nums.length !== 1) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor(left + (right - left) / 2);
    for (let i = 0; i < mid; i++) {
      if (i % 2 === 0) {
        newNums[i] = Math.min(nums[2 * i], nums[2 * i + 1]);
      }
      if (i % 2 === 1) {
        newNums[i] = Math.max(nums[2 * i], nums[2 * i + 1]);
      }
    }
    nums = newNums;
    newNums = [];
  }
  return nums;
};
// @lc code=end
