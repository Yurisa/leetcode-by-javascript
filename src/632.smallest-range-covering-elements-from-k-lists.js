/*
 * @lc app=leetcode id=632 lang=javascript
 *
 * [632] Smallest Range Covering Elements from K Lists
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  const len = nums.length;
  const map = {};

  for (let i = 0; i < len; i++) {
    for (const n of nums[i]) {
      if (!map[n]) {
        map[n] = [];
      }
      map[n].push(i);
      min = Math.min(n, min);
      max = Math.max(n, max);
    }
  }

  let left = min;
  // 开头就++所以此处要-1
  let right = min - 1;
  const freq = Array.from({ length: len }, () => 0);
  let res = [min, max];

  while (right < max) {
    right++;
    if (map[right]) {
      for (let i = 0; i < map[right].length; i++) {
        const index = map[right][i];
        freq[index]++;
      }

      // 当每个组都有数字被当前区间包含，即出现过一次及以上
      while (freq.every((item) => item >= 1)) {
        // 相等的情况下往后就不进入条件循环了
        if (right - left < res[1] - res[0]) {
          res = [left, right];
        }
        if (map[left]) {
          for (let i = 0; i < map[left].length; i++) {
            // 代表[0...k-1]的index
            const index = map[left][i];
            freq[index]--;
          }
        }
        left++;
      }
    }
  }
  return res;
};
// @lc code=end
