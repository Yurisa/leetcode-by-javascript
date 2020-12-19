/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let valid = 0; // 表示涵盖t的字符数
  const need = toMap(p);
  const needLength = Object.keys(need).length;
  const window = {};
  const ret = [];

  while (right < s.length) {
    const c = s[right];

    if (need[c]) {
      if (!window[c]) {
        window[c] = 0;
      }
      window[c]++;
      if (window[c] === need[c]) {
        valid++;
      }
    }

    while (right - left + 1 >= p.length) {
      if (valid === needLength) {
        ret.push(left);
      }

      let d = s[left];
      left++;

      if (need[d]) {
        if (window[d] === need[d]) {
          valid--;
        }
        window[d]--;
      }
    }

    right++;
  }

  function toMap(t) {
    const map = {};
    for (let i = 0; i < t.length; i++) {
      const char = t[i];
      if (!map[char]) {
        map[char] = 0;
      }
      map[char]++;
    }
    return map;
  }

  return ret;
};

const s = "abab";
const p = "ab";
console.log(findAnagrams(s, p));
