/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
  arr.sort((a, b) => a - b);

  let len = arr.length;
  const num = Math.floor(len * 0.05);
  let sum = 0;
  for (let i = num; i <= len - num - 1; i++) {
    sum += arr[i];
  }
  return sum / (len - 2 * num);
};
