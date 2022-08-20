/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  const map = {}
  for(const n of nums) {
      if(!map[n]) {
          map[n] = 1
      } else {
          return n
      }
  }
  return -1
};