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
    let dummy = new ListNode();
    dummy.next = head;
    let began = dummy;
    let last = dummy;
    while (k > 0) {
        last = last.next
        k--
    }
    while (last.next !== null) {
        began.next = began.next
        last.next = last.next
    }
    return began.next
};