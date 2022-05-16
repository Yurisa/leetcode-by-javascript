/*
 * @lc app=leetcode id=986 lang=javascript
 *
 * [986] Interval List Intersections
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < firstList.length && j < secondList.length) {
    const [a1, a2] = firstList[i];
    const [b1, b2] = secondList[j];

    if (a1 <= b2 && b1 <= a2) {
      res.push([Math.max(a1, b1), Math.min(b2, a2)]);
    }

    if (b2 < a2) {
      j++;
    } else {
      i++;
    }
  }
  return res;
};
// @lc code=end

