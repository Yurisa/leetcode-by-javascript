/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function (root) {
  if (root === null) return root;
  const queue = [];
  queue.push(root);

  while (queue.length) {
    let levelSize = queue.length;
    let next = null;

    while (levelSize--) {
      const node = queue.pop();
      node.next = next;
      next = node;

      node.right && queue.unshift(node.right);
      node.left && queue.unshift(node.left);
    }
  }
  return root;
};
// @lc code=end
