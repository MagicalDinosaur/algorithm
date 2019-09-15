/**
 * 求两个字符串的最大公共子序列
 * 递推公式：
 * 当 i==0 || j==0 , dp[i][j] = 0
 * 当 str2[i] == str2[j], dp[i][j] = dp[i-1][j-1] + 1
 * 当 str2[i] != str2[j], dp[i][j] = Math.max(dp[i-1][j].dp[i][j-1])
 */

function LCS(str1, str2) {
    let dp = [], result = "", maxDP = 0;
    for (let i = 0; i < str1.length; i++) {
        dp[i] = []
        for (let j = 0; j < str2.length; j++) {
            // 递推公式
            if (i == 0 && j == 0) {
                dp[i][j] = 0;
            } else if (str1[i] == str2[j]) {
                dp[i][j] = i > 0 && j > 0 ? dp[i - 1][j - 1] + 1 : 1
            } else {
                dp[i][j] = Math.max(i > 0 ? dp[i - 1][j] : 0, j > 0 ? dp[i][j - 1] : 0)
            }
        }
    }
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (dp[i][j] > maxDP) {
                result += str1[i]
                maxDP = dp[i][j]
            }
        }
    }
    console.log(result)
}

LCS('HelloWorld', 'lloopW')