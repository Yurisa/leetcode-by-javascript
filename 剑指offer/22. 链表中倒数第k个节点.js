/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let slow = head;
  let fast = head;
  let len = 0;
  while (fast !== null) {
    fast = fast.next;
    len++;
  }
  let order = len - k;
  while (slow != null && order > 0) {
    slow = slow.next;
    order--;
  }
  return slow;
};
