/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visited = [];
  const onPath = [];
  let hasCycle = false;
  const graph = buildGraph(numCourses, prerequisites);

  for (let i = 0; i < numCourses; i++) {
    traverse(graph, i);
  }

  function traverse(graph, s) {
    if (onPath[s]) {
      hasCycle = true;
    }

    if (visited[s] || hasCycle) {
      return;
    }

    onPath[s] = true;
    visited[s] = true;

    for (const v of graph[s]) {
      traverse(graph, v);
    }

    onPath[s] = false;
  }

  return !hasCycle;
};

function buildGraph(numCourses, prerequisites) {
  const graph = [];
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (const edge of prerequisites) {
    const from = edge[1];
    const to = edge[0];

    // 修完课程from才能修课程to
    graph[from].push(to);
  }
  return graph;
}
// @lc code=end
