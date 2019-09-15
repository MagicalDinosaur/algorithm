/**
 * 大数相加问题
 * 如何实现两个非常大的数字(已经超出了Number范围)的加法运算。
 * 注意由于这两个已经超过了Number范围，因此不能用Number存
 * 
 * 思路：将数字转化为字符串
 */

function bigNumSum(a, b) {
    a = a.toString().split('')
    b = b.toString().split('')
    let result = []
    if (a.length > b.length) {
        b = new Array(a.length - b.length).fill(0).concat(b)
    } else {
        a = new Array(b.length - a.length).fill(0).concat(a)
    }
    for (let i = a.length - 1; i >= 0; i--) {
        let sum = Number(a[i]) + Number(b[i]) + (result[i] || 0)
        result[i] = sum % 10
        if (sum > 9) {
            i - 1 >= 0 ? result[i - 1] = 1 : result.unshift(1)
        }
    }
    return result.join('')
}

bigNumSum(92345, 9994)