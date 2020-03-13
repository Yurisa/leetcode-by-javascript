/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isValidBST = function(root) {
  let pre = null;
  let flag = true;
  let ret = true;
  function loop(root) {
    if (root !== null) {
      loop(root.left);
      if (pre !== null && flag && root.val <= pre) {
        ret = false;
        flag = false;
      }
      pre = root.val;
      loop(root.right);
    }
  }

  loop(root);

  return ret;
};
