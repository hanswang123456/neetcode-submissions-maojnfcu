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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const ret = new ListNode();
        let d = ret;

        while(list1 && list2) {
            if(list1.val <= list2.val) {
                d.next = list1;
                list1 = list1.next;
            } else {
                d.next = list2;
                list2 = list2.next;
            }
            d = d.next;
        }
        
        if(list1) {
            d.next = list1
        }
        if(list2) {
            d.next = list2
        }
        return ret.next;
    }
}
