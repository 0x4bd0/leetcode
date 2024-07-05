/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    list := &ListNode{Val: 0}
    node := list
    leftOver := 0

    for l1 != nil || l2 != nil {
        l1Val := 0
        l2Val := 0

        if l1 != nil {
            l1Val = l1.Val
            l1 = l1.Next
        }

        if l2 != nil {
            l2Val = l2.Val
            l2 = l2.Next
        }

        sum := l1Val + l2Val + leftOver
        leftOver = sum / 10
        sum = sum % 10

        node.Next = &ListNode{Val: sum}
        node = node.Next
    }

    if leftOver > 0 {
        node.Next = &ListNode{Val: leftOver}
    }

    return list.Next
}
