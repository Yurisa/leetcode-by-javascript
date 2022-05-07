/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function (head) {
  const stack = [];
  let p = head;
  while (p !== null) {
    stack.push(p);
    p = p.next;
  }
  p = head;
  while (p !== null) {
    const lastNode = stack.pop();
    next = p.next;

    if (lastNode === next || lastNode.next === next) {
      lastNode.next = null;
      return;
    }

    p.next = lastNode;
    lastNode.next = next;
    p = next;
  }
  return head;
};
// @lc code=end
