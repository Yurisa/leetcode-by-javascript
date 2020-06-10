/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || !s.length) return '';
  let ret = s[0];
  const dp = [];

  for (let i = s.length - 1; i >= 0; i--) {
    dp[i] = [];
    for (let j = i; j < s.length; j++) {
      if (j - i === 0) {
        dp[i][j] = true;
      } else if (j - i === 1 && s[i] === s[j]) {
        dp[i][j] = true;
      } else if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }

      if (dp[i][j] && j - i + 1 > ret.length) {
        ret = s.slice(i, j + 1);
      }
    }
  }
  return ret;
};

const input = 'babad';
console.log(longestPalindrome(input));
