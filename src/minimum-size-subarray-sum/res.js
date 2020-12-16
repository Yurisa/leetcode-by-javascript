/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let n = Number.MAX_SAFE_INTEGER
  let lo = 0
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
       sum += nums[i]
      
      while(sum >= s) {
          n = Math.min(n, i - lo + 1)
          sum = sum - nums[lo]
          lo++
      }
      
  }
  
  return n === Number.MAX_SAFE_INTEGER ? 0 : n
};