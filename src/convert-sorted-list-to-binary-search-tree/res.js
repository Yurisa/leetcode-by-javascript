/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
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
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (head === null) return null;
  function build(head, tail) {
    if (head === tail) return null;
    const mid = getMid(head, tail);
    const root = new TreeNode(mid.val);
    root.left = build(head, mid);
    root.right = build(mid.next, tail);
    return root;
  }

  function getMid(head, tail) {
    let slow = head;
    let fast = head;

    while (fast !== tail && fast.next !== tail) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
  return build(head, null);
};
// @lc code=end
