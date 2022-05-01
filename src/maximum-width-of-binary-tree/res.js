/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
 var widthOfBinaryTree = function (root) {
  if(root === null) return 0
let max = 0;
let queue = [{ node: root, id: 1 }];

while (queue.length) {
  let levelSize = queue.length;
  let start = queue[0].id;
  let end = queue[levelSize - 1].id;

  for (let i = 0; i < levelSize; i++) {
    const obj = queue.shift();
    const node = obj.node;
    // 记录差值，否则在js下id会越界
    const subId = obj.id - start


    node.left && queue.push({ node: node.left, id: 2 * subId });
    node.right && queue.push({ node: node.right, id: 2 * subId + 1 });
      
  }
  max = Math.max(max, end - start + 1);
    
    
}
return max;
};
// @lc code=end
