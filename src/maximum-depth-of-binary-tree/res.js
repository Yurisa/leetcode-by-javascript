/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  const queue = [root];
  let level = 0;

  while (queue.length) {
    level++;
    let levelSize = queue.length;
    while (levelSize--) {
      const node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return level;
};
