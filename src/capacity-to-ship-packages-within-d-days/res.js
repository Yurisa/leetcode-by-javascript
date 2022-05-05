/*
 * @lc app=leetcode id=1011 lang=javascript
 *
 * [1011] Capacity To Ship Packages Within D Days
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function (weights, days) {
  let left = getMax(weights);
  let right = getSum(weights) + 1;
  // [left, right)区间
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (canFinished(weights, days, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

function canFinished(weights, days, cap) {
  let i = 0;
  for (let day = 0; day < days; day++) {
    let maxCap = cap;
    while ((maxCap -= weights[i]) >= 0) {
      i++;
      if (i === weights.length) {
        return true;
      }
    }
  }
  return false;
}

function getMax(weights) {
  let max = 0;
  for (const w of weights) {
    if (w > max) {
      max = w;
    }
  }
  return max;
}

function getSum(weights) {
  let sum = 0;
  for (const w of weights) {
    sum += w;
  }
  return sum;
}
// @lc code=end
