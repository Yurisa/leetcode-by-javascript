/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let cnt = 0;
  let cur = n;
  while (cur > 0) {
    cnt += cur & 1;
    cur = cur >>> 1;
  }
  return cnt;
};
