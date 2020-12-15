/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  s.sort((a, b) => a-b)
  g.sort((a, b) => a-b)  
  let n = 0
  for(let i = 0; i < s.length; i++) {
      if(s[i] >= g[n]) {
          n +=1
      }

  }
  return n
};