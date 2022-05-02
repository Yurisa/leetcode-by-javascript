/*
 * @lc app=leetcode id=919 lang=javascript
 *
 * [919] Complete Binary Tree Inserter
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
 var CBTInserter = function (root) {
  this.root = root;
  this.quene = [];

  const temp = [root];

  while (temp.length) {
    let levelSize = temp.length;
    const node = temp.shift();
    node.left && temp.push(node.left);
    node.right && temp.push(node.right);
    if (node.left === null || node.right === null) {
      this.quene.push(node);
    }
  }
};

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  const node = new TreeNode(val);
  const cur = this.quene[0];

  if (cur.left === null) {
    cur.left = node;
  } else if (cur.right === null) {
    cur.right = node;
    this.quene.shift();
  }
  this.quene.push(node);
  return cur.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */
// @lc code=end
