/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
 var addOneRow = function (root, val, depth) {
  let curDepth = 0;
  let _root = root

  function traverse(root) {
    if (root === null) return;

    // WTF！！！ 第一行要特殊处理
    if (depth === 1) {
      const node = new TreeNode(val);
      node.left = _root;
      _root = node;
      return 
    }
    curDepth++;
    if (curDepth === depth - 1) {
      const node = new TreeNode(val);
      node.left = root.left;
      node.right = null;
      root.left = node;
    }
    traverse(root.left);
    traverse(root.right);
    if (curDepth === depth - 1) {
      const node = new TreeNode(val);
      node.left = null;
      node.right = root.right;
      root.right = node;
    }
    curDepth--;
  }

  traverse(root);
  return _root;
};
// @lc code=end
