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
 var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let head = new ListNode() 
  let p = head
  let p1 = l1;
  let p2 = l2;
  while(p1 !== null || p2 !== null) {
      p.next = new ListNode();
      if(p1 !== null && p2 === null) {
          const sum = p1.val + carry;
          carry = 0;
          p.next.val = sum % 10;
          if(sum >= 10) {
              carry++
          }
          p = p.next;
          p1 = p1.next
          continue
      }

      if(p1 === null && p2 !== null) {
          const sum = p2.val + carry;
          carry = 0;
          p.next.val = sum % 10;
          if(sum >= 10) {
              carry++
          }
          p = p.next;
          p2 = p2.next
          continue
      }
     
      const sum = p1.val + p2.val + carry;
      carry = 0;
      p.next.val = sum % 10;
      if(sum >= 10) {
          carry++
      }
      p = p.next
      p1 = p1.next;
      p2 = p2.next
  }
  if(carry > 0) {
      p.next = new ListNode(carry)
  }
  return head.next
};