/**
 * 随机生成一个长度为 10 的整数类型的数组
 * 例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]
 * 输出 [[2, 3, 4, 5], [10, 11], [20]]。
 */

//  获取一个随机数组
function randomArray() {
    return Array.from({ length: 10 }).map(() => parseInt(Math.random() * 100))
}
function formArray() {
    let hash = {}, res = []
    for (let item of randomArray()) {
        let key = Math.floor(item / 10)
        // set结构 数组去重
        hash[key] ? hash[key].add(item) : hash[key] = new Set([item])
    }
    for (let key in hash) {
        // 输出时进行排序
        res.push([...hash[key]].sort((a, b) => a - b))
    }
    return res
}
console.log(formArray())

