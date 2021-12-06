/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];

  const newCandidates = candidates.sort((a, b) => a - b);
  backtrack(-1, []);
  function backtrack(index, arr) {
    // console.log('arr', arr)
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    if (sum >= target) {
      if (sum === target) {
        result.push(arr);
      }
      return;
    }

    let prev = -1;
    for (let i = index + 1; i < newCandidates.length; i++) {
      if (prev === newCandidates[i]) continue;
      if (!arr.length || newCandidates[i] >= arr[arr.length - 1]) {
        backtrack(i, arr.concat([newCandidates[i]]));
        prev = candidates[i]
      }
    }
  }

  return result;
};

console.log(combinationSum2([2, 5, 2, 1, 2], 5));
