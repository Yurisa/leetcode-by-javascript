/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0;
  let right = 0;
  let valid = 0; // 表示涵盖t的字符数
  const need = toMap(s1);
  const needLength = Object.keys(need).length;
  const window = {};

  while (right < s2.length) {
    const c = s2[right];

    if (need[c]) {
      if (!window[c]) {
        window[c] = 0;
      }
      window[c]++;
      if (window[c] === need[c]) {
        valid++;
      }
    }

    while (right - left + 1 >= s1.length) {
      if (valid === needLength) {
        return true;
      }

      let d = s2[left];
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

  return false;
};

const s1 = "ab";
const s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));
