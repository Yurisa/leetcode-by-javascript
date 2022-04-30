/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
 var largestValues = function (root) {
  if(root === null) return []
const queue = [root];
let ret = [];

while (queue.length) {
  levelSize = queue.length;
  ret.push(getMax(queue));
  while (levelSize--) {
    const node = queue.shift();
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
}

function getMax(queue) {
  let max = queue[0].val;
  for (let node of queue) {
    if (node.val > max) {
      max = node.val;
    }
  }
  return max;
}
return ret;
};
// @lc code=end
