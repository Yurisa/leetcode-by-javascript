/*
 * @lc app=leetcode id=797 lang=javascript
 *
 * [797] All Paths From Source to Target
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const ret = [];
  const path = [];
  const n = graph.length;

  traverse(graph, 0, path);
  function traverse(graph, s, path) {
    path.push(s);

    // 表示到达节点3
    if (s === n - 1) {
      ret.push([...path]);
    }

    for (const v of graph[s]) {
      traverse(graph, v, path);
    }
    path.pop();
  }
  return ret;
};
// @lc code=end
