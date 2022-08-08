/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function (head) {
  let prev = null;

  let p = head;
  while (p !== null) {
    const next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  return prev;
};

// 递归的方式
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
};

// @lc code=end
