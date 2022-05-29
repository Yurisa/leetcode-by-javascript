/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
 var rearrangeCharacters = function(s, target) {
  const map = {}
  const map2 = {}
  for(let i =0; i < s.length; i++) {
      if(!map[s[i]]) {
          map[s[i]] = 0
      }
      map[s[i]]++
  }
  for(let i =0; i < target.length; i++) {
      if(!map2[target[i]]) {
          map2[target[i]] = 0
      }
      map2[target[i]]++
  }
  let res = Number.MAX_SAFE_INTEGER
  Object.keys(map2).forEach(key => {
      res = Math.min(Math.floor((map[key] || 0) / map2[key]), res)
  })
  return res === Number.MAX_SAFE_INTEGER ?  0 : res
};