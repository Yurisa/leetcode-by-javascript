/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let i = 0;
  let j = 0;
  let ret = 0; // 返回的长度
  let str = [];

  while (j < s.length) {
    const cur = s.charAt(j);
    if (!str.includes(cur)) {
      str.push(cur);
      j++;
      ret = Math.max(ret, str.length);
    } else {
      str = str.slice(1);
    }
  }
  return ret;
};

const ts1 = 'abcabcbb';
const ts2 = 'bbbbb';
const ts3 = 'pwwkewabcdd';

console.log(lengthOfLongestSubstring(ts1));
console.log(lengthOfLongestSubstring(ts2));
console.log(lengthOfLongestSubstring(ts3));
