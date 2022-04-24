/*
 * @lc app=leetcode id=370 lang=javascript
 *
 * [370] Range Addition
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
 var getModifiedArray = function (length, updates) {
  const nums = new Array(length).fill(0);
  const diff = new Diffrence(nums);

  updates.forEach((updater) => {
    const i = updater[0];
    const j = updater[1];
    diff.increment(i, j, updater[2]);
  });

  return diff.result();
};

class Diffrence {
  diff = [];

  constructor(nums) {
    this.diff = new Array(nums.length);
    this.diff[0] = nums[0];
    // 构造差分数组
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
  }

  increment(i, j, val) {
    this.diff[i] += val;
    if (j + 1 < this.diff.length) {
      this.diff[j + 1] -= val;
    }
  }

  result() {
    const ret = new Array(this.diff.length);
    ret[0] = this.diff[0];
    for (let i = 1; i < this.diff.length; i++) {
      ret[i] = this.diff[i] + ret[i - 1];
    }
    return ret;
  }
}
// @lc code=end
