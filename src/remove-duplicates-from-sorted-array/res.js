/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      // 维护[0...slow]不重复
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};

console.log(removeDuplicates(nums), nums)
