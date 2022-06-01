#
# @lc app=leetcode id=2290 lang=python3
#
# [2290] Minimum Obstacle Removal to Reach Corner
#

# @lc code=start
from collections import deque


class Solution:
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dis = [[inf] * n for _ in range(m)]
        dis[0][0] = 0
        q = deque([(0, 0)])
        while q:
            x, y = q.popleft()
            for nx, ny in (x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1):
                if 0 <= nx < m and 0 <= ny < n:
                    g = grid[x][y]
                    if dis[x][y] + g < dis[nx][ny]:
                        dis[nx][ny] = dis[x][y] + g
                        if g == 0: q.appendleft((nx, ny))
                        else: q.append((nx, ny))
        return dis[m - 1][n - 1]
# @lc code=end

