/*
 * @lc app=leetcode id=2290 lang=javascript
 *
 * [2290] Minimum Obstacle Removal to Reach Corner
 */

// @lc code=start
/**
 * wtf！！！ 跟其他算法同一思路 就是过不了
 * @param {number[][]} grid
 * @return {number}
 */

 var minimumObstacles = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dis = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => Number.MAX_SAFE_INTEGER)
  );
  dis[0][0] = 0;
  const q = [[0, 0]];
  while (q.length) {
    const [x, y] = q.shift();
    const arr = [[x +1, y], [x-1, y], [x, y+1], [x, y-1]]
    for(let i = 0; i < 4; i++) {
      const [nx, ny] = arr[i];
      if ( nx >=0 && nx < m &&  ny >= 0 && ny < n) {
        g = grid[x][y];
        if (dis[x][y] + g < dis[nx][ny]) {
          dis[nx][ny] = dis[x][y] + g;
          // 优先走代价为0的
          if (g === 0) {
            q.unshift([nx, ny]);
          } else {
            q.push([nx, ny]);
          }
        }
      }
    }
  }
  return dis[m - 1][n - 1];
};
// @lc code=end