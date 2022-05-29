/*
 * @lc app=leetcode id=2283 lang=javascript
 *
 * [2283] Check if Number Has Equal Digit Count and Digit Value
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
 var digitCount = function(num) {
  const n = num.length
  const map = {}
  for(let i =0; i < n; i++) {
      if(!map[num[i]]) {
          map[num[i]] = 0
      }
      map[num[i]]++
  }
  
  for(let i =0; i < n; i++) {
      const target = (map[i] || 0).toString()
      if(target!== num[i]) {
          return false
      }
  }
  return true
};
// @lc code=end

