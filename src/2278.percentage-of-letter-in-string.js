/*
 * @lc app=leetcode id=2278 lang=javascript
 *
 * [2278] Percentage of Letter in String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
 var percentageLetter = function(s, letter) {
  const n = s.length
  const map = {}
  for(let i =0; i < n; i++) {
      if(!map[s[i]]) {
          map[s[i]] = 0
      }
      map[s[i]]++
  }
  let num = 0
  Object.keys(map).forEach(key => {
      if(key === letter) {
         num = map[key]
      }
  })
  return Math.floor(num / n * 100)
};
// @lc code=end

