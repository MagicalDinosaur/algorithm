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
console.log(bubbleSort([3,4,1,2,5]))




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

console.log(quickSort([1,5,7,9,10,8]))