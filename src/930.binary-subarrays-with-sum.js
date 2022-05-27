/*
 * @lc app=leetcode id=930 lang=javascript
 *
 * [930] Binary Subarrays With Sum
 */

// @lc code=start
/**
 * 滑动窗口解法 多指针
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  const n = nums.length;
  // l2 与 l1表示中间夹杂着0的情况
  let l1 = 0;
  let l2 = 0;

  let res = 0;
  let total1 = 0;
  let total2 = 0;

  for (let r = 0; r < n; r++) {
    total1 += nums[r];

    while (total1 > goal) {
      total1 -= nums[l1];
      l1++;
    }
    total2 += nums[r];
    while (l2 <= r && total2 >= goal) {
      total2 -= nums[l2];
      l2++;
    }
    res = res + l2 - l1;
  }

  return res;
};

/**
 * 前缀和解法
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
 var numSubarraysWithSum = function (nums, goal) {
  const n = nums.length;
  const preSum = new Array(n + 1).fill(0);
  const map = { 0: 1};
  let res = 0;

  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
    res += map[preSum[i + 1] - goal] || 0;
    map[preSum[i + 1]] = (map[preSum[i + 1]] || 0) + 1;
  }

  return res;
};
// @lc code=end
