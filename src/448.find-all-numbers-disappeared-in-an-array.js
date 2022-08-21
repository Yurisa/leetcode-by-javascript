/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  nums.sort((a, b) => a -b)
  const ans = []
  for(let i = 1; i <= nums.length; i++) {
      if(!nums.includes(i)) {
          ans.push(i)
      }
  }
  return ans
};
// @lc code=end

