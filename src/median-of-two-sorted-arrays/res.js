/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const first1 = nums1[0];
  const last1 = nums1[nums1.length - 1];
  const first2 = nums2[0];
  const last2 = nums2[nums2.length - 1];
  if (last2 <= first1) {
    return (last2 + first1) / 2;
  }

  if (last1 <= first2) {
    return (last1 + first2) / 2;
  }

  if (last2 > first1) {
    let ret
    let i = 0;
    let j = nums2.length - 1;
    while(i < nums1.length) {
      ++i
      if(nums1[i] >= last2) {
        ret = nums1
      }
    }
  }
  let i = 0;
  let j = 0;

  while (i <= j) {}
};

const nums1 = [1, 2];
const nums2 = [3, 4];
