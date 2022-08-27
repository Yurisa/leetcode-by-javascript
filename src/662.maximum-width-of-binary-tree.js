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
var widthOfBinaryTree = function (root) {
  let max = 1;
  let queue = [[root, 1n]];
  while (queue.length > 0) {
    const size = queue.length;
    max = Math.max(Number(queue[queue.length - 1][1] - queue[0][1] + 1n), max);
    for (let i = 0; i < size; i++) {
      const [node, index] = queue.shift();
      node.left && queue.push([node.left, index * 2n]);
      node.right && queue.push([node.right, index * 2n + 1n]);
    }
  }
  return max;
};
