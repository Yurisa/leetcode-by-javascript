/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if(!nums) {
      return []
  }
  const ret = []
  const window = []
  
  for(let i = 0; i < nums.length; i++) {
      const cur = nums[i]

      if(i >= k && window.length > 0 && window[0] + k <= i) {
          window.shift()
      }
      
      while(window.length > 0 && nums[window[window.length - 1]] <= cur) {
          window.pop()
      }
      
      window.push(i)
      if(i >= k - 1) {
          ret.push(nums[window[0]])
      }
  }
  
  return ret
};