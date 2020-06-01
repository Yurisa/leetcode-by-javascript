/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) {
    return '';
  }
  let ret = '';

  strs.sort((a, b) => b.length - a.length);

  for (let i = 0; i < strs[0].length; i++) {
    ret += strs[0].charAt(i);
    for (let j = 1; j < strs.length; j++) {
      const str = strs[j];
      if (!str.startsWith(ret)) {
        ret = ret.substring(0, ret.length - 1);
        return ret;
      }
    }
  }
  return ret;
};
