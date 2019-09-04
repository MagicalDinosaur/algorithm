/**
 * 数组去重
 */


// ES6 Set 结构实现
// Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
function uniq(arr) {
    return [...new Set(arr)]
}


// 正常的for循环查找
function uniq2(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
}


// 利用 reduce函数
function uniq3(arr) {
    return arr.reduce((result, item) => {
        var result = result.includes(item) ? result : result.push(item);
        console.log(result)
        return result;
    }, [])
}
let a = [1, 2, 3, 3, 4, 4, 5];
console.log(uniq3(a));


/***
 * 复杂数组去重
 */

