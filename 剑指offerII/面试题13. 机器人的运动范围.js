/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let res = 0;
  const visited = new Array(m);
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n).fill(0);
  }
  function dfs(i, j) {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1) return;
    if (visited[i][j]) return;
    visited[i][j] = 1;

    if (getSum(i) + getSum(j) > k) return;
    res++;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  dfs(0, 0);
  return res;
};

function getSum(num) {
  const s = num.toString();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    res += parseInt(s[i]);
  }
  return res;
}
