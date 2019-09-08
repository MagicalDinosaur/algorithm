var list = [{
    id: '1',
    children: [{
        id: '11',
        children: [{
            id: '111'
        }, {
            id: '112'
        }]
    }, {
        id: '12',
        children: [{
            id: '121'
        }, {
            id: '122'
        }]
    }]
}]
const value = '122';

/**
 * 根据以上的数据结构格式，输入 122 输出 [1,12,122]
 */


// 方法一：利用广度遍历->队列先进先出的原理
function findBfsNode(target, id) {
    const quene = [...target]
    do {
        const current = quene.shift()
        if (current.id === id) {
            return current
        }
        if (current.children) {
            quene.push(...current.children.map(x => {
                const { id, children } = x;
                return { id, children, path: (current.path || current.id) + ',' + x.id }
            }))
        }
    } while (quene.length)
    return undefined
}

let result = findBfsNode(list, value);
console.log(result.path) // 1,12,122



// 方法二：利用深度遍历->利用栈的先进后出
function findDfsNode(target, id) {
    const stask = [...target];
    while (stask.length) {
        const current = stask.pop();
        if (current.id === id) {
            return current
        }
        if (current.children) {
            stask.push(...current.children.map(x => {
                const { id, children } = x
                return { id, children, path: (current.path || current.id) + ',' + x.id }
            }))
        }
    }
}

let result2 = findDfsNode(list, '112');
console.log(result2.path) // 1,11,112