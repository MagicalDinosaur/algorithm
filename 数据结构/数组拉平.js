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


