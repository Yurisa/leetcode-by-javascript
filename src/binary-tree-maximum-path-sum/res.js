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
 * @return {number}
 */
var maxPathSum = function (root) {
  let ret = root.val;
  function traverse(node) {
    if (node === null) return 0;
    const left = Math.max(traverse(node.left), 0);
    const right = Math.max(traverse(node.right), 0);
    ret = Math.max(ret, left + right + node.val);
    return Math.max(left, right) + node.val;
  }
  traverse(root)
  return ret
};
