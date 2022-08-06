/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const n = nums.length;
  let farthest = 0;

  for (let i = 0; i < n - 1; i++) {
    // 能跳到最远的下标
    farthest = Math.max(farthest, i + nums[i]);

    if (farthest <= i) {
      return false;
    }
  }
  return farthest >= n - 1;
};
// @lc code=end
