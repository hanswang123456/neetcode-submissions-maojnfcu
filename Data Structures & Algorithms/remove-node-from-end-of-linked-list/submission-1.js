/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let ret = new ListNode(0, head);
        let fast = head;
        let count = 0;

        while(count < n) {
            fast = fast.next;
            count++;
        }
        console.log(fast);

        let slow = ret;

        while(fast) {
            slow = slow.next;
            fast = fast.next;
            console.log(fast, slow)
        }

        slow.next = slow.next.next;

        return ret.next;
    }
}
