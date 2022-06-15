/*
 * @lc app=leetcode id=719 lang=javascript
 *
 * [719] Find K-th Smallest Pair Distance
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var smallestDistancePair = function (nums, k) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let l = 0;
  let r = nums[n - 1] - nums[0] + 1;
  while (l < r) {
    let m = (l + r) >> 1;
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      // 找到所有距离小于m的数字数量
      const i = search(nums, j, nums[j] - m);
      cnt += j - i;
    }
    if (cnt >= k) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
};

function search(nums, end, target) {
  let l = 0;
  let r = end;
  while (l < r) {
    let m = (l + r) >> 1;
    if (nums[m] >= target) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return l;
}
// @lc code=end

