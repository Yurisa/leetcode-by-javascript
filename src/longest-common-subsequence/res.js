/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 *
 * 对于s1[1..i],s2[1..j]，他们的最长公共序列长度为dp[i][j]
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const memo = Array.from({ length: m + 1 }, (x) =>
    Array.from({ length: n + 1 }, (y) => 0)
  );

  function dp(i, j) {
    if (i === -1 || j === -1) return 0;
    if (memo[i][j]) return memo[i][j];
    let ret = 0;
    if (text1[i] === text2[j]) {
      ret = dp(i - 1, j - 1) + 1;
    } else {
      ret = Math.max(dp(i - 1, j), dp(i, j - 1));
    }
    memo[i][j] = ret;
    return ret;
  }
  return dp(m - 1, n - 1);
};

// 数组解法
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] =
        text1[i - 1] === text2[j - 1]
          ? dp[i - 1][j - 1] + 1
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
};

console.log(longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd"));
