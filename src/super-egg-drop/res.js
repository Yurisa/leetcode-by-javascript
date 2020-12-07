// 一般思路如下但是在N=5000 K=4时超出运行次数
var superEggDrop = function (K, N) {
  const memo = {};
  function dp(K, N) {
    if (K === 1) return N;
    if (N === 0) return 0;

    if (memo[`${K}_${N}`]) return memo[`${K}_${N}`];
    let ret = Number.MAX_SAFE_INTEGER;
    let lo = 1;
    let hi = N;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const broken = dp(K - 1, mid - 1); // 碎
      const no_broken = dp(K, N - mid); // 没碎
      if(broken > no_broken) { // 碎的情况尝试次数比较坏往下找
        hi = mid - 1
        ret = Math.min(ret, broken + 1)
      } else { // 没碎的情况尝试次数比较多情况比较坏往上找
        lo = mid + 1
        ret = Math.min(ret, no_broken + 1)
      }
      memo[`${K}_${N}`] = ret;
    }
    return ret;
  }

  return dp(K, N);
};
console.log(superEggDrop(4, 5000));
