/*
 * @lc app=leetcode id=992 lang=javascript
 *
 * [992] Subarrays with K Different Integers
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraysWithKDistinct = function (nums, k) {
  function atMostK(nums, k) {
    const n = nums.length;
    let l = 0;
    let r = 0;
    const freq = new Array(n+1).fill(0);
    let count = 0;
    let res = 0;
    while (r < n) {
      freq[nums[r]]++;
      if (freq[nums[r]] === 1) count++;
      while (count > k) {
        freq[nums[l]]--;
        if (freq[nums[l]] === 0) count--;
        l++;
      }
      res += r - l + 1;
      r++;
    }
    return res;
  }
  return atMostK(nums, k) - atMostK(nums, k - 1);
};
// @lc code=end
