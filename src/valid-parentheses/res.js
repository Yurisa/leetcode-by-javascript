/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const arr = s.split('')
  const map = {
      ')': '(',
      ']': '[',
      '}':'{'
  }
  const stack = []
  
  for(let i = 0; i < arr.length; i++) {
      const item = arr[i]
      
      if(!map[item]) {
          stack.push(item)
      } else if (stack.length === 0 || stack.pop() !== map[item]) {
          return false
      }
  }
      
  return !stack.length
};