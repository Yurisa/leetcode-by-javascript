/*
 * @lc app=leetcode id=1609 lang=javascript
 *
 * [1609] Even Odd Tree
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
 * @return {boolean}
 */
 var isEvenOddTree = function (root) {
  const queue = [root];
  let level = 0;

  while (queue.length) {
    let sz = queue.length;
    // console.log(
    //   'level',
    //   level,
    //   'queue',
    //   queue,
    //   checkEvenLevel(queue),
    //   checkOddLevel(queue)
    // );
    if (level % 2 === 0 && !checkEvenLevel(queue)) {
      return false;
    }
    if (level % 2 === 1 && !checkOddLevel(queue)) {
      return false;
    }

    level++;
    while (sz--) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return true;
};

function checkEvenLevel(queue) {
  let prev = queue[0];
  if (prev.val % 2 !== 1) return false;
  for (let i = 1; i < queue.length; i++) {
    if (queue[i].val % 2 !== 1 || prev.val >= queue[i].val) {
      return false;
    }
    prev = queue[i];
  }
  return true;
}
function checkOddLevel(queue) {
  let prev = queue[0];
  if (prev.val % 2 !== 0) return false;

  for (let i = 1; i < queue.length; i++) {
    if (queue[i].val % 2 !== 0 || prev.val <= queue[i].val) {
      return false;
    }
    prev = queue[i];
  }
  return true;
}
// @lc code=end
