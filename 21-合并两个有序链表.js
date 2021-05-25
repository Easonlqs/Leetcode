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
var mergeTwoLists = function (l1, l2) {
    let node = new ListNode();
    let cur = node;
    while (l1 && l2) {
        if(l1.val <= l2.val){
            cur.next = l1;
            l1 = l1.next
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next
    }
    cur.next = l1 !== null ? l1:l2;
    // 返回node.text 很关键
    return node.next
};
