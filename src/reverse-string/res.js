/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let left = 0
  let right = s.length - 1
  while(left < right) {
      let tmp = s[right]
      s[right] = s[left]
      s[left] = tmp
      left ++ 
      right --
  }
};