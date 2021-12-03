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
 * @return {void} Do not return anything, modify root in-place instead.
 */

let prev;
var recoverTree = function (root) {
  let node1;
  let node2;
  let prev = new TreeNode(-Number.MAX_VALUE);
  traverse(root);
  let tmp = node1.val;
  node1.val = node2.val;
  node2.val = tmp;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);

    if (node.val < prev.val) {
      node2 = node;
      if (!node1) node1 = prev;
    }
    prev = node;

    traverse(node.right);
  }
};
