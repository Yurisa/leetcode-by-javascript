/*
 * @lc app=leetcode id=2295 lang=javascript
 *
 * [2295] Replace Elements in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
 var arrayChange = function (nums, operations) {
  const map = {};
  for (const [target, dest] of operations.reverse()) {
    map[target] = typeof map[dest] !== 'undefined' ? map[dest] : dest;
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = typeof map[nums[i]] !== 'undefined' ? map[nums[i]] : nums[i];
  }
  return nums;
};
// @lc code=end
