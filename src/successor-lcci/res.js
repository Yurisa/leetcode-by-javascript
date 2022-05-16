/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inorderSuccessor = function (root, p) {
  let res = null;
  let prev = null;
  function traverse(root) {
    if (root === null) {
      return;
    }
    traverse(root.left);
    if (prev && prev.val === p.val) {
      res = root;
    }
    prev = root;
    traverse(root.right);
  }
  traverse(root)
  return res;
};
