/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130] Maximum Twin Sum of a Linked List
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
 * @return {number}
 */
 var pairSum = function (head) {
  function reverse(head) {
    let prev = null;
    let cur = head;
    while (cur !== null) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    return prev;
  }

  let sum = 0;
  let p = head;
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = reverse(slow);

  while(slow !== null) {
    sum = Math.max(sum, slow.val + p.val);
    slow = slow.next;
    p = p.next;
  }

  return sum
};
// @lc code=end
