/*
 * @lc app=leetcode id=1123 lang=javascript
 *
 * [1123] Lowest Common Ancestor of Deepest Leaves
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
 * @return {TreeNode}
 */
 var lcaDeepestLeaves = function(root) {
      // 每次记录每棵子树中的最大深度节点的最近公共祖先以及每个节点的深度
  function maxDepth(root) {
    if (root === null) {
      return { node: null, depth: 0 };
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    // 如果左右节点的最大深度相同那么该根节点就为该子树的最近公共祖先
    if (left.depth === right.depth) {
      return { node: root, depth: left.depth + 1 };
    }

    const res = left.depth > right.depth ? left : right;
    res.depth++;
    return res;
  }

  const ret = maxDepth(root);
  return ret.node;
};
// @lc code=end

