/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const n = nums1.length + nums2.length;
  if ((n & 1) === 1) {
    return getKth(nums1, 0, nums2, 0, (n >> 1) + 1);
  } else {
    const left = getKth(nums1, 0, nums2, 0, n >> 1);
    const right = getKth(nums1, 0, nums2, 0, (n >> 1) + 1);
    return (left + right) / 2;
  }
};

function getKth(nums1, i, nums2, j, k) {
  if (nums1.length - i > nums2.length - j) return getKth(nums2, j, nums1, i, k);
  if (nums1.length === i) return nums2[j + k - 1];
  if (k === 1) return Math.min(nums1[i], nums2[j]);
  let idx1 = Math.min(nums1.length, i + Math.floor(k / 2));
  let idx2 = j + Math.floor(k / 2);
  if (nums1[idx1 - 1] < nums2[idx2 - 1]) {
    return getKth(nums1, idx1, nums2, j, k - (idx1 - i));
  } else {
    return getKth(nums1, i, nums2, idx2, k - (idx2 - j));
  }
}
// @lc code=end
