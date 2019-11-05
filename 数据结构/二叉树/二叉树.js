/**
 * 二叉树算法
 */

// 先序遍历 中 左 右
// 先序遍历 左 中 右
// 先序遍历 左 右 中

// 深度优先遍历 DFS（主要利用栈的先进后出）
// 广度优先遍历 BFS（主要利用队列的先进先出）

//         1
//    2        3
// 4    5   6     7

let obj = {
    value: 1,
    left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 }
    },
    right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 }
    }
}

/** 深度优先遍历（主要利用栈的先进后出） **/

//  递归遍历实现
function preOrderTraverse(root) {
    if (root) {
        // 该顺序即为遍历顺序
        preOrderTraverse(root.left)
        console.log(root.value)
        preOrderTraverse(root.right)
    }
}
// preOrderTraverse(obj)
// console.log('////////')




// 非递归便利实现
// 先序遍历
function preOrderTraverse2(root) {
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let temp = stack.pop()
        console.log(temp.value)
        temp.right && stack.push(temp.right)
        temp.left && stack.push(temp.left)
    }
}
// preOrderTraverse2(obj)


// 中序遍历
// 思路：寻找最左子节点，输出，然后将右节点推进栈·
function midOrderTraverse2(root) {
    let stack = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root)
            root = root.left
        } else {
            let temp = stack.pop();
            console.log(temp.value);
            root = temp.right
        }
    }
}
midOrderTraverse2(obj)


// 后序遍历
// 思路： 后续遍历可以理解为 中->右->左 顺序排列的逆序
function postOrderTraverse(root) {
    let stack = [];
    let rest = [];
    if (root) stack.push(root);
    while (stack.length) {
        let temp = stack.pop();
        rest.push(temp.value);
        if (temp.left) stack.push(temp.left);
        if (temp.right) stack.push(temp.right);
    }
    return rest.reverse();
}
// preOrderTraverse2(obj)
// console.log('////////')




/** 广度优先遍历（主要利用栈的先进先出） **/

function breadthFirstSearch(root) {
    let stack = [];
    stack.push(root);
    while (stack.length) {
        let temp = stack.shift();
        // value 的顺序决定方向
        console.log(temp.value);
        temp.left && stack.push(temp.left)
        temp.right && stack.push(temp.right)
    }
}
// breadthFirstSearch(obj);

