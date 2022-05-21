/*
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function (nums) {
  const n = nums.length / 2;
  const map = {};

  for (const item of nums) {
    if (typeof map[item] === 'undefined') {
      map[item] = 0;
    }
    map[item] = map[item] + 1;
  }

  let res = null
  Object.keys(map).forEach((key) => {
    if (map[key] === n) {
    res = key
    }
  });
  return res;
};
// @lc code=end
