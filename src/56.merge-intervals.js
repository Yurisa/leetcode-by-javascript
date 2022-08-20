/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [];
  res.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];
    const last = res[res.length -1];

    if (last[1] >= cur[0]) {
      last[1] = Math.max(last[1], cur[1]);
    } else {
      res.push(cur);
    }
  }

  return res;
};
// @lc code=end



/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]]
  for(let i =1; i < intervals.length; i++) {
      const last = res[res.length - 1]
      const cur = intervals[i]
      if(last[1] < cur[0]) {
          res.push(cur)
      } else {
          res[res.length - 1] = [last[0], Math.max(last[1], cur[1])]
      }
  }
  return res
};