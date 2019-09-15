/**
 * 判断一个链表中是否有环
 */

// 方法一
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let set = new Set([]) // 新建一个set来记录遍历过的节点
    let fast = head
    while (fast) {
        if (set.has(fast)) {
            return true
        } else {
            set.add(fast)
        }
        fast = fast.next;
    }
    return false
};

// 方法二
// 通过使用具有 不同速度 的快、慢两个指针遍历链表，空间复杂度可以被降低至 O(1)O(1)。慢指针每次移动一步，而快指针每次移动两步。
var hasCycle2 = function (head) {
    if (head === null) return false;
    if (head.next === null) return false;
    let fast = head.next;
    let slow = head;
    // 如果列表中不存在环，则fast会最先跳出循环 返回 false
    while (fast && fast.next) {
        if (fast === slow) return true;
        slow = slow.next;
        const next = fast.next;
        fast = next && next.next;
    }
    return false
};