/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right);
  }
  head.next = reverseBetween(head.next, left - 1);
  return head;
};

let s = null;
function reverseN(head, N) {
  if (N === 1) {
    return head;
  }
  let last = reverseN(head.next, N - 1);
  head.next.next = head;
  head.next = s;

  return last;
}
// @lc code=end
