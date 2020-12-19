/**
 * 最大无交集的取反
 * @param {number[][]} intervals
 * @return {number} 
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length == 0) return 0;
  intervals.sort((a, b) => {
    return a[1] - b[1];
  });

  let count = 1;
  let x_end = intervals[0][1];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const start = interval[0];

    if (start >= x_end) {
      count++;
      x_end = interval[1];
    }
  }
  return intervals.length - count;
};
