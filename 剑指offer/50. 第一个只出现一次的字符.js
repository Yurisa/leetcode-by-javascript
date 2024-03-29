/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  if (!s) return " ";
  const map = {};
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      return s[i];
    }
  }
  return " ";
};
