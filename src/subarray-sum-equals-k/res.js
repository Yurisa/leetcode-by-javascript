/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 时间复杂度O(N^2)不符合要求
// var subarraySum = function (nums, k) {
//   const m = nums.length;
//   const preSum = new Array(m + 1);
//   preSum[0] = 0;
//   for (let i = 1; i < preSum.length; i++) {
//     preSum[i] = preSum[i - 1] + nums[i - 1];
//   }
//   let ret = 0;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j <= i; j++) {
//       // j...i的和
//       if (preSum[i + 1] - preSum[j] === k) {
//         ret++;
//       }
//     }
//   }
//   return ret;
// };

var subarraySum = function (nums, k) {
  const m = nums.length;
  const preSum = {};
  preSum[0] = 1;

  let ret = 0;
  let sum0_i = 0;
  for (let i = 0; i < m; i++) {
    // 记录nums[0...i]的和
    sum0_i += nums[i];
    // 找前缀和nums[0...j]的出现次数
    const sum0_j = sum0_i - k;
    if(preSum[sum0_j]) {
      ret += preSum[sum0_j]
    }
    preSum[sum0_i] = (preSum[sum0_i] || 0) + 1
  }
  return ret;
};
// @lc code=end
