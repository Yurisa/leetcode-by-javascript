/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  if(n === 0) return []
  const res = []
  backtrack(n, n, [], res)
  return res
};

function backtrack(left, right, track, res) {
  if(left > right) return;
  if(left < 0 || right < 0) return

  if(left === 0 && right === 0) {
      res.push(track.join(''))
      return 
  }
  track.push('(')
  backtrack(left - 1, right, track, res)
  track.pop()

  track.push(')')
  backtrack(left, right - 1, track, res)
  track.pop()
}


/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  const stack = []
  const ans = []

  function backtrack(left, right) {
      if(left > right) return 
      if(left < 0 || right < 0) return 
      if( left === 0 && right === 0) {
          ans.push(stack.join(''))
          return 
      }
      stack.push('(')
      backtrack(left - 1, right)
      stack.pop()

      stack.push(')')
      backtrack(left, right - 1)
      stack.pop()
  }
  backtrack(n, n)
  return ans
};