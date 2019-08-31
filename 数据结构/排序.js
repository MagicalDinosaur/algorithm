/**
 * 排序
 * 
 */

// 
/** 冒泡排序 */
// 二次循环 O(n^2)
function bubbleSort(arr){
    for(let i = 0;i<arr.length;i++){
        for(let j =i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr
}
// console.log(bubbleSort([3,4,1,2,5]))


// 改进冒泡排序
// 每次最大值放到最右后，会将本轮最后一个操作的位置 pos 作为下一轮的终点，可以减少不必要的一些冒泡
function bubbleSort1(arr) {
    let i = arr.length - 1;
    while (i > 0) {
        let pos = 0;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                pos = j;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log(pos,arr);
        i = pos;
    }
    return arr;
}
console.log(bubbleSort1([1,11,5,7,9,10,8]))


/** 快速排序 */
// 递归思想,选出枢纽元，划分左右大小区，再继续递归对大小区进行快排
// 平均运行时间 O(NlogN)
function quickSort(arr){
    if(arr.length<2) return arr;
    let left=[],right=[];
    let pivot = arr[0];
    for(let i = 1; i<arr.length;i++){
        arr[i]> pivot ? right.push(arr[i]) : left.push(arr[i])
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

// console.log(quickSort([1,5,7,9,10,8]))