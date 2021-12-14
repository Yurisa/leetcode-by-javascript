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
var flatten = function (root) {
  let head = null;
  traverse(root);
  function traverse(node) {
    if (!node || node.val === null) return;

    if (head) {
      head.left = null;
      head.right = node;
    }
    head = node;
    const right = head.right;

    traverse(node.left);
    traverse(right);
  }
  return head;
};
