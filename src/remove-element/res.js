/**
 * 对撞指针，后指针始终代表末尾
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      if (nums[left] === nums[right]) {
        right--;
      } else {
        nums[left] = nums[right];
        left++;
        right--;
      }
    } else {
      left++;
    }
  }
  return right + 1;
};
