/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ret = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        ret++;
        dfs(grid, i, j);
      }
    }
  }
  return ret;
};

function dfs(grid, i, j) {
  const m = grid.length;
  const n = grid[0].length;
  if (i < 0 || j < 0 || i > m - 1 || j > n - 1) {
    return;
  }

  if (grid[i][j] === '0') {
    return;
  }

  grid[i][j] = '0';

  dfs(grid, i + 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
}

console.log(
  numIslands([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ])
);
