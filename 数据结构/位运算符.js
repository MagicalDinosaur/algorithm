
// & 位运算符，两个数值（二进制）各位分别相与，同时为1才得1，只要有一个为0就为0
// 1 位运算符，两个数值（二进制）各位分别相与，同时为0才得0，只要有一个为1就为1


// 判断奇偶
function isOdd(n) {
    return n & 1 === 1;
}


/**
 * 汉明重量
 */
// 
function hanmingWeight(n) {
    let num = 0;
    while (n !== 0) {
        console.log(n)
        num += (n & 1)
        n >>>= 1
    }
    return num;
}
console.log(hanmingWeight(5))
