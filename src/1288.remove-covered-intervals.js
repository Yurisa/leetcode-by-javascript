/*
 * @lc app=leetcode id=1288 lang=javascript
 *
 * [1288] Remove Covered Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  let res = intvs.length;
  // 按左边界升序排序，如果左边界相等则按右边界降序排列
  intvs.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });

  let left = intvs[0][0];
  let right = intvs[0][1];
  for (const intv of intvs) {
    // 覆盖区间
    if (left <= intv[0] && right >= intv[1]) {
      res--;
    }

    // 相交
    if (right >= intv[0] && right <= intv[1]) {
      right = intv[1];
    }

    // 不相交
    if (right <= intv[0]) {
      left = intv[0];
      right = intv[1];
    }
  }
  return res;
};
// @lc code=end

