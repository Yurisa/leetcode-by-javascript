/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let n = nums.length
  let farthest = 0
 for(let i = 0; i< n-1; i++) {
     farthest = Math.max(farthest, i + nums[i]) // 【0，..., i】最多能到多远
     // 遇到了0就停住不动了
     if(farthest <= i) return false
 }
 
 return farthest >= n-1
};