/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  function backtrack(path, left, right) {
    if (left === right && left == n) {
      res.push(path.join(""));
      return;
    }
    if (right > left || left > n) return;
    backtrack(path.concat("("), left + 1, right);
    backtrack(path.concat(")"), left, right + 1);
  }
  backtrack([], 0, 0);
  return res;
};
