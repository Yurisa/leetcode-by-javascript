/*
 * @lc app=leetcode id=384 lang=javascript
 *
 * [384] Shuffle an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
 var Solution = function (nums) {
  this.nums = nums;
  this.random = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = 0; i < this.random.length; i++) {
    const randIdx = Math.floor(Math.random() * this.random.length);
    this.swap(i, randIdx);
  }
  return this.random
};

Solution.prototype.swap = function (i, j) {
  [this.random[i], this.random[j]] = [this.random[j], this.random[i]];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
