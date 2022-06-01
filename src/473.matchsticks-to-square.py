#
# @lc app=leetcode id=473 lang=python3
#
# [473] Matchsticks to Square
#

# @lc code=start
from typing import List


class Solution:
    def makesquare(self, matchsticks: List[int]) -> bool:
        n = len(matchsticks)
        edges = [0 for i in range(4)]
        matchsticks.sort(reverse=True)
        totalNum = sum(matchsticks)
        if totalNum % 4 != 0:
            return False
        def dfs(index: int):
            if index == n:
                return True
            for i in range(4):
                edges[i] += matchsticks[index]
                if edges[i] <= totalNum // 4 and dfs(index + 1):
                    return True
                edges[i] -= matchsticks[index]
            return False
        
        return dfs(0)
        
# @lc code=end

