/**
 * 解法一 map
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};

  for (i in nums) {
    const item = nums[i];
    if (!map[item]) {
      map[item] = 0;
    }
    ++map[item];
  }

  for (const k in map) {
    if(map[k] > nums.length / 2) {
      return k
    }
  }
   return -1
};


/**
 * 解法二 直接排序
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // sort the array and the middle is the majority
  nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length/2)];
}; 

