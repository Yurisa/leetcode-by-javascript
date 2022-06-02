/*
 * @lc app=leetcode id=2104 lang=javascript
 *
 * [2104] Sum of Subarray Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function (nums) {
  const n = nums.length;
  const min = getCnt(true);
  const max = getCnt(false);
  let ret = BigInt(0);

  for (let i = 0; i < n; i++) {
    ret += (max[i] - min[i]) * BigInt(nums[i]);
  }
  function getCnt(isMin) {
    // 存下标
    let st = [];
    let left = new Array(n);
    let right = new Array(n);
    for (let i = 0; i < n; i++) {
      while (
        st.length && isMin
          ? nums[st[st.length - 1]] >= nums[i]
          : nums[st[st.length - 1]] <= nums[i]
      ) {
        st.pop();
      }
      left[i] = st.length === 0 ? -1 : st[st.length - 1];
      st.push(i);
    }

    st = [];

    for (let i = n - 1; i >= 0; i--) {
      while (
        st.length && isMin
          ? nums[st[st.length - 1]] > nums[i]
          : nums[st[st.length - 1]] < nums[i]
      ) {
        st.pop();
      }
      right[i] = st.length === 0 ? n : st[st.length - 1];
      st.push(i);
    }
    let ret = new Array(n);
    for (let i = 0; i < n; i++) {
      ret[i] = BigInt(right[i] - i) * BigInt(i - left[i]);
    }
    return ret
  }
  return ret;
};
// @lc code=end
