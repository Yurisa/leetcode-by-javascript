/**
 * @param {number} bottom
 * @param {number} top
 * @param {number[]} special
 * @return {number}
 */
 var maxConsecutive = function(bottom, top, special) {
  let res = 0;
  let right = 1;
  let cur = 0
  special.sort((a, b) => a - b);
  res = Math.max(special[0] - bottom, top- special[special.length -1])
  while(right < special.length ) {
     cur = special[right] - special[right - 1] - 1
     res = Math.max(cur, res)
     right++
      
  }
  return res
};
