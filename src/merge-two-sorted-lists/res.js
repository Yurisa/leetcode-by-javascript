/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let s1 = l1
  let s2 = l2
  let p = new ListNode()
  let head = p
  while(s1 || s2) {
      if(!s1 && s2) {
          p.next = new ListNode(s2.val)
          s2 = s2.next 
          p = p.next
          continue
      }
      
      if(!s2 && s1) {
          p.next = new ListNode(s1.val)
          s1 = s1.next
          p = p.next
          continue
      }
      
      if(s1.val <= s2.val) {
          p.next = new ListNode(s1.val)
          s1 = s1.next 
      } else {
          p.next = new ListNode(s2.val)
          s2 = s2.next 
      }
      p = p.next
  } 
  return head.next
};