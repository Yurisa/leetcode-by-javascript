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