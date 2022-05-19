/*
 * @lc app=leetcode id=462 lang=javascript
 *
 * [462] Minimum Moves to Equal Array Elements II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort((a, b) => a - b);
  let res = 0;

  let mid = Math.floor((nums.length - 1) / 2);
  for (let i = 0; i < nums.length; i++) {
    res += Math.abs(nums[i] - nums[mid]);
  }
  return res; 
};
// @lc code=end

