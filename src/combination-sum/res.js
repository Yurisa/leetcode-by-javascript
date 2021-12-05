/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  backtrack([]);
  function backtrack(arr) {
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

    for (let i = 0; i < candidates.length; i++) {
      if (!arr.length || candidates[i] >= arr[arr.length - 1]) {
        backtrack(arr.concat([candidates[i]]));
      }
    }
  }

  return result;
};

console.log(combinationSum([1,3,4,2, 5,6], 8));
