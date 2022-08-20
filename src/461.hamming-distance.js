/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
  const n = x^y;
  let cur = n
  let cnt = 0
  while(cur > 0) {
      let temp = cur % 2;
      if(temp === 1) {
          cnt = cnt + 1
      } 
      cur = Math.floor(cur / 2)
  }
  return cnt
};