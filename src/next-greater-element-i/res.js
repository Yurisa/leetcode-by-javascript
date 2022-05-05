/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const ret = [];
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];
    while (stack.length > 0 && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    map[num] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(num);
  }

  for (let i = 0; i < nums1.length; i++) {
    ret[i] = map[nums1[i]];
  }
  return ret;
};

// @lc code=end
