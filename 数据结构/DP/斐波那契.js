/**
 * 
 * 斐波那契序列
 * 1 2 3 5 8 13 21
 */

// 利用递归
function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 利用动态规划思想
function fibonacci2(n) {
    if (n <= 1) return 1;
    let last = 1, nextToLast = 1, result;
    for (let i = 1; i < n; i++) {
        result = last + nextToLast;
        nextToLast = last;
        last = result;
    }
    return result;
}


