/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let right = 0;
  let left = 0;
  const queue = [];
  let cur = 0;
  const ans = [];
  while (right < nums.length) {
    const num = nums[right];
    cur++;
    while (queue.length && num > queue[queue.length - 1]) {
      queue.pop();
    }
    queue.push(num);
    while (cur > k) {
      if (queue[0] === nums[left]) {
        queue.shift();
      }
      cur--;
      left++;
    }
    if (cur === k) {
      ans.push(queue[0]);
    }
    right++;
  }
  return ans;
};
// @lc code=end
