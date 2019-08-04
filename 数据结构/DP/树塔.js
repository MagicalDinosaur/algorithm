/**
 * 树塔问题
 * 一些数字排成塔的形状，从顶部走到底部，要求数字总和最大
 * 
 * 解题思路：动态规划思想（最优子结构）
 * 设置 dp[i][j] 是从 i j 位置到底部的最大值，利用公式：
 * dp[i][j] = max(dp[i+1][j],dp[i+1][j+1]) + arr[i][j]；
 * 最底层每个位置的dp值即值本身，由此向上遍历求解
 * 
 */

function numberTow(arr) {
    let n = arr.length - 1, dp = [];
    dp[n] = [];
    // 将最底层的值存入 dp ，因为最底层的 dp值 就是值本身
    for (let i = 0; i < arr[n].length; i++) {
        dp[n][i] = arr[n][i]
    }
    for (let i = n - 1; i >= 0; i--) {
        dp[i] = []
        for (let j = 0; j <= arr[i].length - 1; j++) {
            // 该处的 dp值是 左下和右下的dp值取最大值再加上本身值
            let leftNum = dp[i + 1][j], rightNum = dp[i + 1][j + 1];
            if (typeof (leftNum) === 'number' && typeof (rightNum) === 'number') {
                dp[i][j] = Math.max(leftNum, rightNum) + arr[i][j]
            } else {
                dp[i][j] = arr[i][j] + typeof (leftNum) === 'number' ? leftNum : rightNum
            }
        }
    }
    // 返回 00 节点的dp值
    return dp[0][0]
}


tower = [
    [5],
    [8, 3],
    [12, 7, 16],
    [4, 10, 11, 6],
    [9, 5, 3, 9, 4]
]
console.log(numberTow(tower))   // 44 
