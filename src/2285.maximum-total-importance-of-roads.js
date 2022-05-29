/*
 * @lc app=leetcode id=2285 lang=javascript
 *
 * [2285] Maximum Total Importance of Roads
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
 var maximumImportance = function(n, roads) {
  const map = {}
  for(let i = 0; i < roads.length; i++) {
      for(let j = 0; j < 2; j++) {
          if(!map[roads[i][j]]) {
              map[roads[i][j]] = 0 
          }
           map[roads[i][j]] = map[roads[i][j]] + 1
      }
  }
  const arr = Object.keys(map).sort((a, b) => map[b] - map[a])
  let maxSum = BigInt(0);
  for(let i =0; i< arr.length; i++) {
      maxSum += BigInt(map[arr[i]] || 0) * BigInt(n - i)
  }
  return maxSum
};
// @lc code=end

