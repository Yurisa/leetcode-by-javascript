/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  for(let i = 0; i < nums.length -1; i++ ) {
      for(let j = i + 1; j < nums.length; j++) {
          if(nums[i] > nums[j]) {
              let tmp = nums[i]
              nums[i] = nums[j]
              nums[j] = tmp
          }
      }
  }
  return nums
};