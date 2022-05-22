/*
 * @lc app=leetcode id=2279 lang=javascript
 *
 * [2279] Maximum Bags With Full Capacity of Rocks
 */

// @lc code=start
/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
 var maximumBags = function(capacity, rocks, additionalRocks) {
  const remain = []
  let res = 0
  for(let i = 0; i < capacity.length; i++) {
      remain[i] = capacity[i] - rocks[i]
  }
  remain.sort((a, b) => a - b)
  for(let i = 0; i < remain.length; i++) {
      if(remain[i] >= 0 && additionalRocks >= remain[i]) {
        additionalRocks -= remain[i];            
        res++
      } 
  }
  return res
};
// @lc code=end

