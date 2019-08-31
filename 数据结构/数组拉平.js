// 利用 es6 的 flat 函数
function flattenDeep(arr, deepLength) {
    return arr.flat(deepLength);
}

// 递归实现
function flattenDeep2(arr) {
    // 作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。
    return arr.reduce((res, val) => {
        return Array.isArray(val) ? res.concat(flattenDeep2(val)) : res.concat(val)
    }, [])
}
console.log(flattenDeep2([1, 2, [3, 4]]))

// 利用栈实现
function flattenDeep3(arr) {
    let stack = [...arr];
    let result = [];
    while (stack.length) {
        let temp = stack.shift();
        if (Array.isArray(temp)) {
            stack.unshift(...temp)
        } else {
            result.push(temp);
        }
    }
    return result
}
console.log(flattenDeep3([1, 2, [3, 4]]))



/**
 * 拓展
 * 已知如下数组：
 * var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
 * 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
 */

function handleArray(arr) {
    // return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b)
    return Array.from(new Set(arr.toString().split(","))).sort((a, b) => a - b)
}
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
console.log(handleArray(arr));
