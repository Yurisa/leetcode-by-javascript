/*
 * @lc app=leetcode id=675 lang=javascript
 *
 * [675] Cut Off Trees for Golf Event
 */

// @lc code=start
/**
 * @param {number[][]} forest
 * @return {number}
 */
 const dirs = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
var cutOffTree = function (forest) {
  const trees = [];
  let res = 0;
  const row = forest.length;
  const col = forest[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (forest[i][j] > 1) {
        trees.push([i, j]);
      }
    }
  }
  trees.sort((a, b) => forest[a[0]][a[1]] - forest[b[0]][b[1]]);

  let cx = 0;
  let cy = 0;
  for (let i = 0; i < trees.length; i++) {
    let steps = bfs(forest, cx, cy, trees[i][0], trees[i][1]);
    if (steps === -1) {
      return -1;
    }
    res += steps;
    cx = trees[i][0];
    cy = trees[i][1];
  }
  return res;
};

const bfs = (forest, sx, sy, tx, ty) => {
  if (sx === tx && sy === ty) {
    return 0;
  }
  const row = forest.length;
  const col = forest[0].length;
  let step = 0;
  const queue = [];
  const visited = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  );
  queue.push([sx, sy]);
  visited[sx][sy] = true;

  while (queue.length) {
    step++;
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const cell = queue.shift();
      const [cx, cy] = cell;

      for (let j = 0; j < 4; j++) {
        const nx = cx + dirs[j][0];
        const ny = cy + dirs[j][1];
        if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
          if (!visited[nx][ny] && forest[nx][ny] > 0) {
            if (nx === tx && ny === ty) {
              return step;
            }
            queue.push([nx, ny]);
            visited[nx][ny] = true;
          }
        }
      }
    }
  }
  return -1;
};
// @lc code=end

