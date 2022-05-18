/*
 * @lc app=leetcode id=668 lang=javascript
 *
 * [668] Kth Smallest Number in Multiplication Table
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
  const n = Math.min(_m, _n);
  const m = Math.max(_m, _n);

  let l = 1;
  let r = m * n;
  while (l < r) {
    let mid = Math.floor(l + (r - l) / 2);
    let cnt = getCount(mid);
    if (cnt >= k) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }

  function getCount(mid) {
    let a = 0;
    let b = 0;
    for (let i = 1; i <= n; i++) {
      if (i * m < mid) {
        a += m;
      } else {
        if (mid % i === 0 && ++b >= 0) {
          a += mid / i - 1;
        } else {
          a += Math.floor(mid / i);
        }
      }
    }
    return a + b;
  }

  return r;
};
// @lc code=end

