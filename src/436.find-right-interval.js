/*
 * @lc app=leetcode id=436 lang=javascript
 *
 * [436] Find Right Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
 var findRightInterval = function(intervals) {
  const n = intervals.length;
  const startIntervals = new Array(n).fill(0).map(() => new Array(2).fill(0));
  for (let i = 0; i < n; i++) {
      startIntervals[i][0] = intervals[i][0];
      startIntervals[i][1] = i;
  }
  startIntervals.sort((o1, o2) => o1[0] - o2[0]);

  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
      let left = 0;
      let right = n - 1;
      let target = -1;
      while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (startIntervals[mid][0] >= intervals[i][1]) {
              target = startIntervals[mid][1];
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      ans[i] = target;
  }
  return ans;
};
// @lc code=end

