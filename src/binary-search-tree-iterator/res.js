/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function (root) {
  this.orders = [];
  this.pointer = 0;
  const traverse = (root) => {
    if (root === null) return;
    traverse(root.left);
    this.orders.push(root.val);
    traverse(root.right);
  };
  traverse(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const cur = this.orders[this.pointer];
  this.pointer++;
  return cur;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.pointer < this.orders.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
