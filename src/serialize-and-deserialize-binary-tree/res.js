/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function (root) {
  function _serialize(node) {
    if (node === null) {
      list.push(null);
      return;
    }

    list.push(node.val);
    _serialize(node.left);
    _serialize(node.right);
  }
  const list = [];
  _serialize(root);

  return JSON.stringify(list);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data) return null;
  const nodes = JSON.parse(data);
  return _deserialize(nodes);
};

function _deserialize(nodes) {
  if (!nodes || nodes.length === 0) return null;
  const first = nodes.shift();
  if (first === null) return null;

  const root = new TreeNode(first);
  root.left = _deserialize(nodes);
  root.right = _deserialize(nodes);

  return root;
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
