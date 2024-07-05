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
var addTwoNumbers = function (l1, l2) {
    const list = new ListNode(0)
    let node = list
    let leftOver = 0

    while (l1 || l2) {

        l1Val = l1 ? l1.val : 0
        l2Val = l2 ? l2.val : 0

        let sum = l1Val + l2Val + leftOver

        leftOver = (10 - sum) > 0 ? 0 : 1

        sum = sum % 10

        node.next = new ListNode(sum)

        l1 = l1.next ?? 0
        l2 = l2.next ?? 0

        node = node.next

    }

    if (leftOver) node.next = new ListNode(leftOver)
    return list.next
};
