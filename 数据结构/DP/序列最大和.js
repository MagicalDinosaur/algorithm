/***
 * 最大连续子序列和
 * 给定一个数字序列 A1 A2 ... An,求 i,j 使得 Ai 到 Aj 最大
 */

function maxSum(arr) {
    let dp = [];
    for (let i = 0; i < arr.length; i++) {
        if (!i) {
            dp[i] = arr[i];
        } else {
            // dp[i] 有两种可能，一种是值本身，一种是 dp[i-1] + arr[i]
            dp[i] = Math.max(arr[i], arr[i] + dp[i - 1])
        }
    }
    return Math.max(...dp)
}

console.log(maxSum([1,2,3,4,-5]))

