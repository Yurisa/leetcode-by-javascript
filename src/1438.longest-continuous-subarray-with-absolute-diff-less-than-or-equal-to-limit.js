/*
 * @lc app=leetcode id=1438 lang=javascript
 *
 * [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
 var longestSubarray = function (nums, limit) {
  const window = new MonotonicQueue();
  let left = 0;
  let right = 0;
  let windowSize = 0;

  let res = 0;
  while (right < nums.length) {
    window.push(nums[right]);
    right++;
    windowSize++;

    while (window.max() - window.min() > limit) {
      window.pop(nums[left]);
      left++;
      windowSize--;
    }

    res = Math.max(windowSize, res);
  }
  return res;
};

// 使用单调队列实现
class MonotonicQueue {
  // 单调递减
  maxq = [];
  // 单调递增
  minq = [];
  push(n) {
    while (this.maxq.length > 0 && this.maxq[this.maxq.length - 1] < n) {
      this.maxq.pop();
    }
    this.maxq.push(n);

    while (this.minq.length > 0 && this.minq[this.minq.length - 1] > n) {
      this.minq.pop();
    }
    this.minq.push(n);
  }

  pop(n) {
    if (this.maxq[0] === n) {
      this.maxq.shift();
    }

    if (this.minq[0] === n) {
      this.minq.shift();
    }
  }

  max() {
    return this.maxq[0];
  }

  min() {
    return this.minq[0];
  }
}
// @lc code=end
