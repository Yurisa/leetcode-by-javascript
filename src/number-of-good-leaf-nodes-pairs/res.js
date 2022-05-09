/*
 * @lc app=leetcode id=1530 lang=javascript
 *
 * [1530] Number of Good Leaf Nodes Pairs
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
 var countPairs = function (root, distance) {
  let res = 0;

  // 函数返回该子树下所有叶子节点到该节点的距离
  function traverse(root) {
    if (root === null) return [];
    if (root.left === null && root.right === null) return [1];

    const left = traverse(root.left);
    const right = traverse(root.right);

    for (const l of left) {
      for (const r of right) {
        if (l + r <= distance) {
          res++;
        }
      }
    }
    return [...left, ...right].map((v) => v + 1);
  }

  traverse(root);
  return res;
};
// @lc code=end
