/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const result = [];
  backtrack("", 0);
  function backtrack(str, index) {
    if (index >= s.length) {
      result.push(str);
      return;
    }

    let word = "";
    for (let i = index; i < s.length; i++) {
      word += s[i];
      // console.log('word1', word, wordDict.includes(word))
      if (wordDict.includes(word)) {
        const newStr = str + (!str ? "" : " ") + word;
        backtrack(newStr, i + 1);
      }
    }
  }
  return result;
};

console.log(
  wordBreak("pineapplepenapple", [
    "apple",
    "pen",
    "applepen",
    "pine",
    "pineapple",
  ])
);
