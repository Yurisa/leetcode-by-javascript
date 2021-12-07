/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  backtrack(0, []);
  function backtrack(index, arr) {
    if (arr.length == k) {
      result.push(arr);
    }
    for (let i = index + 1; i <= n; i++) {
      backtrack(i, arr.concat(i));
    }
  }

  return result;
};


console.log(combine(1, 1))