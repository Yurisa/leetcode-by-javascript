/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {};
  const ret = [];

  for (let i = 0; i < arr1.length; i++) {
    const n = arr1[i];
    if (!map[n]) {
      map[n] = 0;
    }
    map[n]++;
  }

  for (let i = 0; i < arr2.length; i++) {
    const m = arr2[i];
    while (map[m] > 0) {
      ret.push(m);
      map[m]--;
    }
  }

  for (let key in map) {
    while (map[key] > 0) {
      ret.push(parseInt(key));
      map[key]--;
    }
  }
  return ret;
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
  arr2 = [2, 1, 4, 3, 9, 6];


console.log(relativeSortArray(arr1, arr2))
