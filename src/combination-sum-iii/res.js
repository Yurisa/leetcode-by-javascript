/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];
  backtrack(n, 0, []);
  function backtrack(temp, index, arr) {
    if (temp === 0 && arr.length === k) {
      result.push(arr);
      return;
    }

    if (arr.length > k) {
      return;
    }
    for (let i = index + 1; i < 10; i++) {
      backtrack(temp - i, i, arr.concat(i));
    }
  }
  return result;
};

console.log(combinationSum3(4, 1));
