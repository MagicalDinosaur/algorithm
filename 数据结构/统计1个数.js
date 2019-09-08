/**
 * 统计 1 ~ n 整数中出现 1 的次数
 * 例如统计 1 ~ 400W 出现 1 的次数。
 */

/**
 * 221 
 * 个位 1 可能产生的 1 是 23个(1, 11, 21, ... 221, 只关注个位)， 
 * 十位 2 可能产生的 1是 30个(10-19, 110-119, 210-219, 只关注十位),
 * 百位 2 产生的 1是100个(100 - 199， 只关注百位)
 * 每一位数字可能产生的1的个数跟他的高位部分和低位部分相关
 */

function countOne(n) {
    var factor = 1;
    let count = 0;
    let next = parseInt(n / factor); // 对应位的值
    while (next !== 0) {
        var lower = n - next * factor // factor 的下一位
        var curr = next % 10;
        var high = parseInt(n / (10 * factor));

        if (curr === 0) {
            count += high * factor;
        } else if (curr === 1) {
            count += high * factor + lower + 1
        } else {
            count += (high + 1) * factor
        }

        factor *= 10;
        next = parseInt(n / factor);
    }
    return count;
}