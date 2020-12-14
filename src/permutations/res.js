/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const ret = []
  function backtrack(path) {
      if(path.length === nums.length) {
          ret.push(path)
          return
      }
      nums.forEach(n => {
          if(path.includes(n)) return 
          backtrack(path.concat(n))
      })
  }
  backtrack([])
  return ret
};