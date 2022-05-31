/*
 * @lc app=leetcode id=2289 lang=javascript
 *
 * [2289] Steps to Make Array Non-decreasing
 */

// @lc code=start
/**
 * 单调栈
 * @param {number[]} nums
 * @return {number}
 */
 var totalSteps = function (nums) {
  const n = nums.length;
  const st = [];
  // 用来记录删除每个数所需的次数
  const f = new Array(n).fill(0);
  let res = 0;
  for (let i = 0; i < n; i++) {
    let cur = 0;
    while (st.length && nums[st[st.length - 1]] <= nums[i]) {
      cur = Math.max(cur, f[st[st.length - 1]]);
      st.pop();
    }
    // 意味着左边必有比它大的数
    if (st.length) {
      f[i] = cur + 1;
      res = Math.max(cur + 1, res);
    }
    st.push(i);
  }

  return res;
};
// @lc code=end
