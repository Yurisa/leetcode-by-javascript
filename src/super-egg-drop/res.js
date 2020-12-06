
// 一般思路如下但是在N=5000 K=4时超出运行次数
var superEggDrop = function (K, N) {
  const memo = {}
  function dp(K, N) {
    if (K === 1) return N;
    if (N === 0) return 0;

    if(memo[`${K}_${N}`]) return memo[`${K}_${N}`]

    let ret = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= N + 1; i++) {
      ret = Math.min(
        ret,
        // 碎了,没碎
        Math.max(dp(K - 1, i - 1), dp(K, N - i)) + 1
      );
      memo[`${K}_${N}`] = ret
    }
    return ret;
  }

  return dp(K, N)
};
console.log(superEggDrop(4, 5000));
