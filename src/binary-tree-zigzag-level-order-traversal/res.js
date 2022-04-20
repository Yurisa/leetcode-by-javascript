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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const ret = [];

  // false代表从右到左，true代表从左到右
  let flag = false
  let level = 0;
  const queue = [root];

  while (queue.length) {
    let levelSize = queue.length;
    const levelArr = [];

    while (levelSize--) {
      const node = queue.shift();
       if(flag) {
         levelArr.unshift(node.val);   
       } else {
         levelArr.push(node.val)
       }

      // 从右到左
       node.left && queue.push(node.left);
       node.right && queue.push(node.right);
    }
    ret.push(levelArr);
    flag = !flag
  }

  return ret;
};