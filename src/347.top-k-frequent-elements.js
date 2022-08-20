/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }
    map[nums[i]]++;
  }

  const values = Object.values(map);
  const keys = Object.keys(map);

  const res = [];
  for (let i = 0; i < k; i++) {
    const index = values.indexOf(Math.max(...values));
    values[index] = null;
    res.push(keys[index]);
  }
  return res;
};
// @lc code=end
