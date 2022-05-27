/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 function findClosest(words, word1, word2) {
  const n = words.length;
  // p和q记录最近的word1和word2的位置
  let p = -1;
  let q = -1;
  let res = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    const c = words[i];
    if (c === word1) p = i;
    if (c === word2) q = i;
    if (p !== -1 && q !== -1) res = Math.min(res, Math.abs(p - q));
  }

  return res;
}
