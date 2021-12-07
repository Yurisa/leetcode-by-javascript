/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  const len = nums.length;
  backtrack([]);
  function backtrack(arr) {
    const newNums = nums.slice();
    if (arr.length === len) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const index = newNums.findIndex((item) => item === arr[i]);
      if (index !== -1) {
        newNums.splice(index, 1);
      }
    }

    let prev;
    for (let i = 0; i < newNums.length; i++) {
      if (prev === newNums[i]) continue;
      backtrack(arr.concat([newNums[i]]));
      prev = newNums[i];
    }
  }

  return result;
};

console.log(permuteUnique([3, 3, 0, 3]));
