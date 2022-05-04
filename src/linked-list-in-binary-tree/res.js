/*
 * @lc app=leetcode id=1367 lang=javascript
 *
 * [1367] Linked List in Binary Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSubPath = function (head, root) {
  if (head === null) return true;
  if (root === null) return false;
  if (head.val === root.val) {
      if(check(head, root)) {
          return true
        }
    
  }
  function check(head, root) {
    if (head === null) return true;
    if (root === null) return false;

    if (head.val === root.val) {
      return check(head.next, root.left) || check(head.next, root.right);
    }
    return false;
  }
  return isSubPath(head, root.left) || isSubPath(head, root.right);
};
// @lc code=end
