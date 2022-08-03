/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @return {ListNode}
 */
var sortList = function (head) {
  if (head === null || head.next === null) return head;
  let slow = head;
  let fast = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tmp = slow.next;
  slow.next = null;
  let h = new ListNode(0);
  let res = h;
  let left = sortList(head);
  let right = sortList(tmp);
  while (left !== null && right !== null) {
    if (left.val > right.val) {
      h.next = right;
      right = right.next;
    } else {
      h.next = left;
      left = left.next;
    }
    h = h.next;
  }
  h.next = left !== null ? left : right;
  return res.next;
};
// @lc code=end
