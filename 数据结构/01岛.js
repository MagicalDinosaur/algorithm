/**
 * 求0 ，1矩阵中岛的个数和0，1矩阵的最大连续全1块（可以非规则）
 * 举例：
 *  [ 1, 1, 0, 0, 1, 1 ]
 *  [ 0, 0, 0, 0, 1, 1 ]
 *  [ 0, 1, 1, 1, 1, 1 ]
 *  [ 0, 1, 1, 0, 1, 1 ]
 *  [ 0, 1, 0, 1, 0, 0 ]
 *  [ 0, 1, 0, 0, 0, 1 ]
 *  输出：4
 */

//  生成一个随机的01矩阵
function createRect() {
    let arr = []
    for (let i = 0; i < 6; i++) {
        arr[i] = []
        for (let j = 0; j < 6; j++) {
            arr[i][j] = Math.random() > 0.5 ? 1 : 0
        }
        console.log(arr[i])
    }
    return arr
}

// 方法一：运用递归对上下左右四个方向进行赋值
function countBlock(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
                block(i, j)
                count++
            }
        }
    }
    function block(i, j) {
        arr[i][j] = -1; // 统计过的1修改为-1
        // 对上下左右四个方向进行延展
        if (i < arr.length - 1 && arr[i + 1][j] == 1) {
            block(i + 1, j)
        }
        if (j < arr[0].length - 1 && arr[i][j + 1] == 1) {
            block(i, j + 1)
        }
        if (i > 0 && arr[i - 1][j] == 1) {
            block(i - 1, j)
        }
        if (j > 0 && arr[i][j - 1] == 1) {
            block(i, j - 1)
        }

    }
    return count
}



const arr = createRect()
// console.log(countBlock(arr));



/**
 * 给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。两个相邻元素间的距离为 1 。
 * 举例：
 * 0 0 0
 * 0 1 0
 * 1 1 1
 * 输出：
 * 0 0 0
 * 0 1 0
 * 1 2 1
 */
var updateMatrix = function (matrix) {
    let row = matrix.length, col = matrix[0].length;
    // 第一次遍历，正向遍历，根据相邻左元素和上元素得出当前元素的对应结果
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 1) {
                matrix[i][j] = row + col;
            }
            if (i > 0) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i - 1][j] + 1);
            }
            if (j > 0) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][j - 1] + 1);
            }
        }
    }
    console.log(matrix)
    // 第二次遍历，反向遍历，根据相邻右元素和下元素及当前元素的结果得出最终结果
    for (let i = row - 1; i >= 0; i--) {
        for (let j = col - 1; j >= 0; j--) {
            if (i < row - 1) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i + 1][j] + 1);
            }
            if (j < col - 1) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i][j + 1] + 1);
            }
        }
    }
    console.log(matrix)
    return matrix;
};
updateMatrix(arr)
