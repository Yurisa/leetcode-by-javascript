/*
 * @lc app=leetcode id=503 lang=javascript
 *
 * [503] Next Greater Element II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const stack = [];
  const n = nums.length;
  const res = new Array(nums.length).fill(-1);
  nums = [...nums, ...nums];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
      const curIndex = stack.pop();
      if (curIndex < n) {
        res[curIndex] = nums[i];
      }
    }

    stack.push(i);
  }
  return res;
};
// @lc code=end
