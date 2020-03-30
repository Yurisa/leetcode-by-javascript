/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const ret = [];
  _gen(n, 0, 0, "");

  function _gen(n, left, right, result) {
    if (left === n && right === n) {
      ret.push(result);
      return;
    }

    if (left < n) {
      _gen(n, left + 1, right, result + "(");
    }
    if (left > right && right < n) {
      _gen(n, left, right + 1, result + ")");
    }
  }

  return ret;
};
