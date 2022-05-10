/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
 */

// @lc code=start
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
 var maxLevelSum = function (root) {
  let res = 1;
  let depth = 1;
  let max = root.val;
  const queue = [root];

  while (queue.length) {
    let sz = queue.length;
    const sum = getSum(queue);
    if (sum > max) {
      max = sum;
      res = depth;
    }
    depth++;
    while (sz--) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return res;
};

function getSum(queue) {
  let sum = 0;

  for (const item of queue) {
    sum += item.val;
  }
  return sum;
}
// @lc code=end
