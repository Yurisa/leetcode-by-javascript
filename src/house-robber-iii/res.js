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

const memo = new Map();
var rob = function (root) {
  if (!root) return 0;
  if (memo.has(root)) {
    return memo.get(root);
  }
  // 抢，去下下各节点
  const do_it =
    root.val +
    (root.left === null ? 0 : rob(root.left.left) + rob(root.left.right)) +
    (root.right === null ? 0 : rob(root.right.left) + rob(root.right.right));
  // 不抢，去下个节点
  const not_do = rob(root.left) + rob(root.right);
  const ret = Math.max(do_it, not_do);
  memo.set(root, ret);
  return ret;
};
