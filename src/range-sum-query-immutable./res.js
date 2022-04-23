/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  const len = nums.length;
  this.preNums = new Array(len + 1);
  this.preNums[0] = 0
  for (let i = 1; i < len + 1; i++) {
    this.preNums[i] = nums[i - 1] + this.preNums[i - 1];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.preNums[right + 1] - this.preNums[left - 1 + 1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
