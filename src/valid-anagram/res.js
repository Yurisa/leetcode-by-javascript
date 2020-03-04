/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
  const arr1 = s.split('')
  const arr2 = t.split('')
  const map1 = {}
  const map2 = {}
  
  for(char of arr1) {
      if(!map1[char]) {
          map1[char] = 0
      } 
      map1[char] = ++map1[char]
  }
  
  
  for(char of arr2) {
      if(!map2[char]) {
          map2[char] = 0
      } 
      map2[char] = ++map2[char]
  }
  
  
  for(let k in map1) {
      if(map1[k] !== map2[k]) {
          return false
      }
  }
  
  for(let k in map2) {
      if(map1[k] !== map2[k]) {
          return false
      }
  }
  return true
};