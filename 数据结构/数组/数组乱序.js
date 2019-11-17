/**
 * 数组乱序，洗牌算法
 * 从最后一个元素开始，从数组中随机选出一个位置，交换，直到第一个元素
 */
function disorder(arrs) {
    let arr = arrs;
    let count = 0, randomIndex, length = arr.length;
    while (count < length) {
        randomIndex = Math.floor(Math.random() * length)
        console.log(randomIndex, arr[randomIndex], arr[count])
        // [arr[randomIndex], arr[count]] = [arr[count], arr[randomIndex]]
        [arr[0], arr[1]] = [arr[1], arr[0]];
        count++
    }
    return arr
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(disorder(arr))

